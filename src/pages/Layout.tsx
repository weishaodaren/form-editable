/* eslint-disable react/jsx-max-depth */
import type { PropsWithChildren, FC } from 'react';

import { Panel, PanelGroup } from 'react-resizable-panels';

import Demo from './Demo';
import WorkingPanel from './Panel';
import Sidebar from './Sidebar';

import { ResizeHandle } from '@/components';

/**
 * Layout
 */
const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-screen">
      <PanelGroup className="text-base" direction="horizontal" autoSaveId="persistenceLayoutLeft">
        <Panel className="flex flex-row" defaultSize={10}>
          <div className="panel-centered flex grow flex-row flex-wrap items-start justify-stretch justify-items-center">
            <Sidebar />
          </div>
        </Panel>
        <ResizeHandle />
        <Panel className="flex flex-row" minSize={35}>
          <PanelGroup className="text-base" direction="vertical" autoSaveId="persistenceLayoutTop">
            <Panel className="flex flex-col" defaultSize={90}>
              <div className="panel-centered">
                <WorkingPanel />
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
                  <div className="panel-centered">{children}</div>
                </Panel>
              </PanelGroup>
            </Panel>
          </PanelGroup>
        </Panel>
        <ResizeHandle />
        <Panel className="flex flex-row" defaultSize={20}>
          <div className="panel-centered">
            <Demo />
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Layout;
