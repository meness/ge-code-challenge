import { Sidebar } from '@components/sidebar/sidebar.component';
import { Layout, theme } from 'antd';

const { Content } = Layout;

type GeneralLayoutProps = {
  children: JSX.Element;
};

export const GeneralLayout = ({ children }: GeneralLayoutProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
