import {
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
} from 'antd';

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
}));

export { widgets, widgetsConfig };
