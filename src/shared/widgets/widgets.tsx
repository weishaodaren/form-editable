import {
  Input,
  AutoComplete,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  InputNumber,
  Mentions,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
} from 'antd';

import { createButton } from './Button';

const widgets = [
  createButton,
  () => null,
  // Button,
  // Input,
  // AutoComplete,
  // Cascader,
  // Checkbox,
  // ColorPicker,
  // DatePicker,
  // InputNumber,
  // Mentions,
  // Radio,
  // Rate,
  // Select,
  // Slider,
  // Switch,
  // TimePicker,
  // Transfer,
  // TreeSelect,
  // Upload,
];

type WidgetOption = ReturnType<(typeof widgets)[number]>;

/**
 * 生成组件映射
 * @returns {Map<string, Object>}
 */
function gengeateWidgetMap() {
  const widgetsMap = widgets
    .map(createWidget => {
      const widget = createWidget?.();
      if (!widget) return null;

      const { name } = widget;
      return [name, widget];
    })
    .filter(Boolean);

  return new Map(widgetsMap as [string, NonNullable<WidgetOption>][]);
}

const widgetsMap = gengeateWidgetMap();
const widgetsValues = Array.from(widgetsMap, ([, widget]) => widget);

export { widgets, widgetsValues, widgetsMap };
