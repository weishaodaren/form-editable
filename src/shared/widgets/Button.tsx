import type { FC } from 'react';

import type { ButtonProps } from 'antd';
import { Button as AntdButton } from 'antd';

/**
 * Custom button component
 */
const Button: FC<ButtonProps> = (...props) => {
  return <AntdButton {...props}>Button</AntdButton>;
};

export default Button;
