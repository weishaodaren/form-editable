import type { PropsWithChildren, FC, CSSProperties } from 'react';

import { Layout as AntdLayout, Space } from 'antd';

const { Header, Sider, Content, Footer } = AntdLayout;

const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

const siderStyle: CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};

const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

/**
 * Layout
 */
const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Space direction="vertical" style={{ width: '100%', height: '100%' }} size={[0, 48]}>
      <AntdLayout>
        <Sider style={siderStyle}>Sider</Sider>
        <AntdLayout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>{children}</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </AntdLayout>
      </AntdLayout>
    </Space>
  );
};

export default Layout;
