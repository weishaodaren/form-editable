import { useCallback, memo } from 'react';

import type { Form } from 'antd';
import { Button, Cascader, DatePicker, Input, InputNumber, Radio, Select, Switch, TreeSelect } from 'antd';

import { useRootStore } from '@/model';

const Settings = memo(() => {
  const changeWidgetOptions = useRootStore(state => state.changeWidgetOptions);

  const handleBlockChange = useCallback(
    (checked: boolean) => changeWidgetOptions({ block: checked }),
    [changeWidgetOptions],
  );

  return (
    <div className="w-full h-full">
      <span>撑满:</span>
      <Switch onChange={handleBlockChange} />
    </div>
  );
});

export default Settings;
