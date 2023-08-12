import type { FC } from 'react';

import { PanelResizeHandle } from 'react-resizable-panels';

import styles from './index.module.css';

import { Icon } from '@/components/Icon';

type ResizeHandleProps = {
  className?: string;
  collapsed?: boolean;
  id?: string;
};

/**
 * resize 控制器
 */
const ResizeHandle: FC<ResizeHandleProps> = ({ className = '', collapsed = false, id }) => {
  return (
    <PanelResizeHandle className={[styles.ResizeHandleOuter, className].join(' ')} id={id}>
      <div className={styles.ResizeHandleInner} data-collapsed={collapsed || undefined}>
        <Icon className={styles.HorizontalIcon} type="resize-horizontal" />
        <Icon className={styles.VerticalIcon} type="resize-vertical" />
      </div>
    </PanelResizeHandle>
  );
};

export default ResizeHandle;
