import type { ButtonProps } from 'antd';
import type { StateCreator } from 'zustand';

import type { RootStoreState } from '../rootModel';
import type { PersistMiddleware, DevtoolsMiddleware, ImmerMiddleware } from '../type';

interface ConfigurationSlice {
  fishes: number;
  addFish: () => void;
  changeWidgetOptions: (props: ButtonProps) => void;
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
  changeWidgetOptions: props =>
    set(state => {
      const { widgets, selectedWidgetKey } = state;
      if (!selectedWidgetKey) return;

      if (widgets.has(selectedWidgetKey)) {
        widgets.get(selectedWidgetKey)!.props = props;
      }
    }),
});

export type { ConfigurationSlice };
export { createConfigurationSlice };
