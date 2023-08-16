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

import Button from './Button';

const widgets = [
  Button,
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
];

const widgetsConfig = widgets.map(widget => ({
  title: widget.displayName,
  redner: () => widget,
}));

const widgetsMap = widgets.reduce(
  (acc, widget) => {
    acc[widget.displayName as string] = widget;
    return acc;
  },
  {} as { [key: string]: (typeof widgets)[number] },
);

export { widgets, widgetsConfig, widgetsMap };
