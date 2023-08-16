import { createContext, useContext, createElement, useRef } from 'react';
import type { PropsWithChildren } from 'react';

import { merge } from 'lodash-es';
import { useStore, createStore } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import type { ConfigurationSlice } from './slice';
import { createConfigurationSlice } from './slice';
import type { Selector } from './type';

interface RootStoreProps {
  bears: number;
  widgets: any[];
}

interface RootStoreState extends RootStoreProps, ConfigurationSlice {
  increasePopulation: () => void;
  removeAllBears: () => void;
  addWidget: (widget: any) => void;
  reset: () => void;
}

type RootStore = ReturnType<typeof createRootStore>;

/**
 * Context
 */
const rootContext = createContext<RootStore | null>(null);

/**
 * 创建根级仓库
 * @param {Partial<RootStoreProps>} initialProps
 * @returns {RootStore}
 */
function createRootStore(initialProps?: Partial<RootStoreProps>) {
  const initialState: RootStoreProps = {
    bears: 0,
    widgets: [],
  };

  return createStore<RootStoreState>()(
    persist(
      immer(
        devtools((set, get, store) => ({
          ...merge(initialState, initialProps),
          ...createConfigurationSlice(set, get, store),
          increasePopulation: () =>
            set(state => {
              ++state.bears;
            }),
          removeAllBears: () =>
            set(state => {
              state.bears = 0;
              state.widgets = [];
            }),
          reset: () => {
            set(initialState);
          },
          // 添加组件
          addWidget: widget =>
            set(state => {
              state.widgets.push(widget);
            }),
        })),
      ),
      {
        name: 'root-storage',
      },
    ),
  );
}

/**
 * Provider
 * @description 上下文插件
 * @param {PropsWithChildren<RootStoreProps>}
 * @returns {JSX.Element}
 */
const RootProvider = ({ children, ...props }: PropsWithChildren<Partial<RootStoreProps>>) => {
  const storeRef = useRef<RootStore>();
  if (!storeRef.current) {
    storeRef.current = createRootStore(props);
  }
  return createElement(rootContext.Provider, { value: storeRef.current }, children);
};

/**
 * Hook
 * @description 获取上下文
 * @param {Selector} selector
 * @returns {RootStore}
 */
function useRootStore<T>(selector: Selector<RootStoreState, T>): T {
  const store = useContext(rootContext);
  if (!store) throw new Error('useRootStore must be used within a RootProvider');
  return useStore(store, selector);
}

export { RootProvider, useRootStore };
export type { RootStoreState };
