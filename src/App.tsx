import { HappyProvider } from '@ant-design/happy-work-theme';
import { Button, ConfigProvider } from 'antd';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type BearState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

const useStore = create(
  immer<BearState>(set => ({
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

const App = () => {
  const bears = useStore(state => state.bears);
  const increasePopulation = useStore(state => state.increasePopulation);
  return (
    <ConfigProvider>
      <HappyProvider>
        <Button type="primary" onClick={increasePopulation}>
          Click Me {bears}
        </Button>
        <Button onClick={() => useStore.getState().removeAllBears()}>Reset</Button>
      </HappyProvider>
    </ConfigProvider>
  );
};

export default App;
