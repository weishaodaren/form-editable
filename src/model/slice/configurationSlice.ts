import type { StateCreator } from 'zustand';

import type { RootStoreState } from '../rootModel';
import type { PersistMiddleware, DevtoolsMiddleware, ImmerMiddleware } from '../type';

interface ConfigurationSlice {
  fishes: number;
  addFish: () => void;
}

/**
 * 配置项
 */
const createConfigurationSlice: StateCreator<
  RootStoreState,
  [DevtoolsMiddleware, PersistMiddleware<unknown>, ImmerMiddleware<RootStoreState>],
  [],
  ConfigurationSlice
> = set => ({
  fishes: 0,
  addFish: () =>
    set(state => {
      ++state.fishes;
    }),
});

export type { ConfigurationSlice };
export { createConfigurationSlice };
