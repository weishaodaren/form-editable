import { Button } from 'antd';

import { useRootStore } from '@/model';

const Demo = () => {
  const [state, updateState, clearState] = useRootStore(state => [
    state.bears,
    state.increasePopulation,
    state.removeAllBears,
  ]);

  return (
    <>
      <Button type="primary" onClick={updateState}>
        Click Me {state}
      </Button>
      <Button onClick={clearState}>reset</Button>
    </>
  );
};

export default Demo;
