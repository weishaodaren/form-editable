import { Card, Avatar } from 'antd';

import { HoverCard } from '@/components/HoverCard';
import { widgetsConfig } from '@/shared';

const { Meta } = Card;

const avatarUrl = new URL('~/public/avatar.png', import.meta.url).href;

/**
 * 侧边栏
 */
const Sidebar = () => {
  return widgetsConfig.map(widget => (
    <div key={widget.title} className=" w-60 h-auto">
      <HoverCard>
        <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover" />}>
          <Meta avatar={<Avatar src={avatarUrl} />} title={widget.title} description={`${widget.title} widget`} />
        </Card>
      </HoverCard>
    </div>
  ));
};

export default Sidebar;
