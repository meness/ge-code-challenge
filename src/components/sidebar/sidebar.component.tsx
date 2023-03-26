import { Layout, Menu } from 'antd';
import { memo, useState } from 'react';
import { sidebarItems } from './data';

const { Sider } = Layout;

const InnerSidebar = () => {
  const [
    collapsed,
    setCollapsed,
  ] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => {
        return setCollapsed(value);
      }}>
      <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
      <Menu
        theme="dark"
        defaultSelectedKeys={['home']}
        mode="inline"
        items={sidebarItems}
      />
    </Sider>
  );
};

export const Sidebar = memo(InnerSidebar);
