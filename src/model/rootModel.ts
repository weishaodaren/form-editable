import { createContext, useContext, createElement, useRef } from 'react';
import type { PropsWithChildren } from 'react';

import { useStore, createStore } from 'zustand';
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

  return createStore(
    immer<RootStoreState>(set => ({
      ...defaultProps,
      ...initialProps,
      bears: 0,
      increasePopulation: () =>
        set(state => {
          state.bears += 1;
        }),
      removeAllBears: () =>
        set(state => {
          state.bears = 0;
        }),
    })),
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
 * @param {(state: RootStoreProps) => T} selector
 * @returns {RootStore}
 */
function useRootStore<T>(selector: Selector<RootStoreProps, T>): T {
  const store = useContext(rootContext);
  if (!store) throw new Error('useRootStore must be used within a RootProvider');
  return useStore(store, selector);
}

export { RootProvider, useRootStore };
