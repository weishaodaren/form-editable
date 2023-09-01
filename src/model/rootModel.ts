import { createContext, useContext, createElement, useRef } from 'react';
import type { PropsWithChildren } from 'react';

import { enableMapSet } from 'immer';
import { merge, uniqueId } from 'lodash-es';
import { useStore, createStore } from 'zustand';
import type { StorageValue } from 'zustand/middleware';
import { persist, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import type { ConfigurationSlice } from './slice';
import { createConfigurationSlice } from './slice';
import type { Selector } from './type';

import type { WidgetProps } from '@/shared/type';

enableMapSet();

interface RootStoreProps {
  bears: number;
  widgets: Map<string, WidgetProps>;
  selectedWidgetKey: string;
}

interface RootStoreState extends RootStoreProps, ConfigurationSlice {
  increasePopulation: () => void;
  removeAllBears: () => void;
  addWidget: (widget: Partial<WidgetProps>) => void;
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
    widgets: new Map(),
    selectedWidgetKey: '',
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
              state.widgets.clear();
            }),
          reset: () => {
            set(initialState);
          },
          // 添加组件
          addWidget: widget =>
            set(state => {
              const key = uniqueId();
              state.widgets.set(key, widget as WidgetProps);
              state.selectedWidgetKey = key;
            }),
        })),
      ),
      {
        name: 'root-storage',
        storage: {
          getItem: name => {
            const stringValue = localStorage.getItem(name);
            if (!stringValue) return null;
            const { state } = JSON.parse(stringValue) as StorageValue<RootStoreProps>;
            return {
              state: {
                ...state,
                widgets: new Map(state.widgets),
              },
            };
          },
          setItem: (name, newValue: StorageValue<RootStoreProps>) => {
            const stringValue = JSON.stringify({
              state: {
                ...newValue.state,
                widgets: Array.from(newValue.state.widgets.entries()),
              },
            });
            localStorage.setItem(name, stringValue);
          },
          removeItem: name => localStorage.removeItem(name),
        },
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
