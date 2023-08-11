import type { PropsWithChildren, FC } from 'react';

import { Layout as AntdLayout } from 'antd';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <AntdLayout>{children}</AntdLayout>;
};

export default Layout;
