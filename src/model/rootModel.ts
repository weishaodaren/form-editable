import { createContext, useContext, createElement, useRef } from 'react';
import type { PropsWithChildren } from 'react';

import { useStore, createStore } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import type { Selector } from './type';

interface RootStoreProps {
  bears: number;
}

interface RootStoreState extends RootStoreProps {
  increasePopulation: () => void;
  removeAllBears: () => void;
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
  const defaultProps: RootStoreProps = {
    bears: 0,
  };

  return createStore<RootStoreState>()(
    persist(
      immer(set => ({
        ...defaultProps,
        ...initialProps,
        increasePopulation: () =>
          set(state => {
            ++state.bears;
          }),
        removeAllBears: () =>
          set(state => {
            state.bears = 10;
          }),
      })),
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
const RootProvider = ({ children, ...props }: PropsWithChildren<RootStoreProps>) => {
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
