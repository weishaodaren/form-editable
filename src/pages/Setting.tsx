import { useCallback, memo, useMemo } from 'react';

import { Segmented, Switch, Space } from 'antd';

import { useRootStore } from '@/model';

const SegmentedValue = ['normal', 'danger', 'disabled', 'ghost'];
const Segmenteds = SegmentedValue.map(_ => ({ [_]: false }));

const Settings = memo(() => {
  /**
   * Context
   */
  const { widgets, selectedWidgetKey, changeWidgetOptions } = useRootStore(state => ({
    widgets: state.widgets,
    changeWidgetOptions: state.changeWidgetOptions,
    selectedWidgetKey: state.selectedWidgetKey,
  }));

  /**
   * Memo
   * @description 当前配置信息
   * @returns {Object}
   */
  const option = useMemo(() => {
    if (!widgets.has(selectedWidgetKey)) return null;
    const { props } = widgets.get(selectedWidgetKey) ?? {};
    return props;
  }, [widgets, selectedWidgetKey]);

  /**
   * Callback
   * @description 手动切换`block`
   * @returns {Void}
   */
  const handleBlockChange = useCallback(
    (checked: boolean) => changeWidgetOptions({ block: checked }),
    [changeWidgetOptions],
  );

  /**
   * Callback
   */
  const handleStatusChange = useCallback(
    (value: string) => {
      Segmenteds.forEach(item => {
        console.log(`>>>>`, item);
        // item

        // item[value] = true;
      });
      // changeWidgetOptions({ ...Segmenteds });
    },
    [changeWidgetOptions],
  );

  return (
    <div className="w-full h-full">
      <Space wrap>
        <span>撑满:</span>
        <Switch onChange={handleBlockChange} checked={option?.block} />
      </Space>
      <Space wrap>
        <span>状态:</span>
        <Segmented options={SegmentedValue} onChange={handleStatusChange} />
      </Space>
    </div>
  );
});

export default Settings;
