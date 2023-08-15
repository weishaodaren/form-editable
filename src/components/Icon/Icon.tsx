import type { FC } from 'react';

type IconType = 'resize-horizontal' | 'resize-vertical';

type IconProps = {
  className?: string;
  type: IconType;
};

// million-ignore
const Icon: FC<IconProps> = ({ className = '', type }) => {
  let path = '';
  switch (type) {
    case 'resize-horizontal':
      path = 'M18,16V13H15V22H13V2H15V11H18V8L22,12L18,16M2,12L6,16V13H9V22H11V2H9V11H6V8L2,12Z';
      break;
    case 'resize-vertical':
      path = 'M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z';
      break;
  }

  return (
    <svg className={[className, 'w-4', 'h-4', 'flex-[0_0_1rem]', 'fill-current'].join(' ')} viewBox="0 0 24 24">
      <path fill="currentColor" d={path} />
    </svg>
  );
};

export default Icon;
export type { IconType };
