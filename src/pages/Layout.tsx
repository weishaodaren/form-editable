import type { PropsWithChildren, FC } from 'react';

import { Panel, PanelGroup } from 'react-resizable-panels';

import styles from './layout.module.css';

import { ResizeHandle } from '@/components';

/**
 * Layout
 */
const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.PanelGroupWrapper}>
      <PanelGroup className={styles.PanelGroup} direction="horizontal">
        <Panel className={styles.PanelRow} defaultSize={20}>
          <div className={styles.Centered}>{children}</div>
        </Panel>
        <ResizeHandle className={styles.ResizeHandle} />
        <Panel className={styles.PanelRow} minSize={35}>
          <PanelGroup className={styles.PanelGroup} direction="vertical">
            <Panel className={styles.PanelColumn} defaultSize={35}>
              <div className={styles.Centered}>{children}</div>
            </Panel>
            <ResizeHandle className={styles.ResizeHandle} />
            <Panel className={styles.PanelColumn}>
              <PanelGroup className={styles.PanelGroup} direction="horizontal">
                <Panel className={styles.PanelRow}>
                  <div className={styles.Centered}>{children}</div>
                </Panel>
                <ResizeHandle className={styles.ResizeHandle} />
                <Panel className={styles.PanelRow}>
                  <div className={styles.Centered}>{children}</div>
                </Panel>
              </PanelGroup>
            </Panel>
          </PanelGroup>
        </Panel>
        <ResizeHandle className={styles.ResizeHandle} />
        <Panel className={styles.PanelRow} defaultSize={20}>
          <div className={styles.Centered}>{children}</div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Layout;
