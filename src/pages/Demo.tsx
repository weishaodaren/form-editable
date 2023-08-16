import { Button, Space } from 'antd';

import { useRootStore } from '@/model';

const Demo = () => {
  const [state, updateState, reset] = useRootStore(state => [state.bears, state.increasePopulation, state.reset]);
  const { fishes, bears, addFish } = useRootStore(state => ({
    fishes: state.fishes,
    bears: state.bears,
    addFish: state.addFish,
  }));

  return (
    <Space wrap>
      <Button type="primary" onClick={updateState}>
        Click Me {state}
      </Button>
      <Button type="dashed" onClick={reset}>
        reset
      </Button>
      <Button onClick={addFish} type="link">{`Fishes: ${fishes}----${bears}`}</Button>
    </Space>
  );
};

export default Demo;
