import type { PropsWithChildren, FC } from 'react';

import { Layout as AntdLayout, Space } from 'antd';

const { Header, Sider, Content, Footer } = AntdLayout;

/**
 * Layout
 */
const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Space direction="vertical" className="w-full h-full" size={[0, 48]}>
      <AntdLayout>
        <Sider className="text-center h-10 bg-cyan-700 text-sky-50">Sider</Sider>
        <AntdLayout>
          <Header className="text-center h-10 bg-cyan-500 text-sky-200">Header</Header>
          <Content className="text-center h-10 bg-cyan-300 text-sky-400">{children}</Content>
          <Footer className="text-center h-10 bg-cyan-100 text-sky-600">Footer</Footer>
        </AntdLayout>
      </AntdLayout>
    </Space>
  );
};

export default Layout;
