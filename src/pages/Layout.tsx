import type { PropsWithChildren, FC } from 'react';

import { Panel, PanelGroup } from 'react-resizable-panels';

import { ResizeHandle, HoverCard } from '@/components';

/**
 * Layout
 */
const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-screen">
      <PanelGroup className="text-base" direction="horizontal" autoSaveId="persistenceLayoutLeft">
        <Panel className="flex flex-row" defaultSize={20}>
          <div className="panel-centered">{children}</div>
        </Panel>
        <ResizeHandle />
        <Panel className="flex flex-row" minSize={35}>
          <PanelGroup className="text-base" direction="vertical" autoSaveId="persistenceLayoutTop">
            <Panel className="flex flex-col" defaultSize={35}>
              <div className="panel-centered">
                <HoverCard />
              </div>
            </Panel>
            <ResizeHandle />
            <Panel className="flex flex-col">
              <PanelGroup className="text-base" direction="horizontal" autoSaveId="persistenceLayoutBottom">
                <Panel className="flex flex-row">
                  <div className="panel-centered">{33}</div>
                </Panel>
                <ResizeHandle />
                <Panel className="flex flex-row">
                  <div className="panel-centered">{44}</div>
                </Panel>
              </PanelGroup>
            </Panel>
          </PanelGroup>
        </Panel>
        <ResizeHandle />
        <Panel className="flex flex-row" defaultSize={20}>
          <div className="panel-centered">{55}</div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Layout;
