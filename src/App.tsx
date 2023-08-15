import { StyleProvider } from '@ant-design/cssinjs';
import { HappyProvider } from '@ant-design/happy-work-theme';
import { ConfigProvider } from 'antd';

import { RootProvider } from '@/model';
import Layout from '@/pages/Layout';

const App = () => (
  <ConfigProvider>
    <HappyProvider>
      <StyleProvider hashPriority="high">
        <RootProvider bears={999}>
          <Layout />
        </RootProvider>
      </StyleProvider>
    </HappyProvider>
  </ConfigProvider>
);
export default App;
