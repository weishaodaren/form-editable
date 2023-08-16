import type { ButtonProps } from 'antd';
import { Button as AntdButton } from 'antd';

function createButton() {
  return {
    name: 'Button',
    description: 'Button widget',
    render: (params: ButtonProps) => <AntdButton {...params} />,
  };
}

export { createButton };
