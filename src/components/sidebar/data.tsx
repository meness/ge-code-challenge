import { HomeOutlined } from '@ant-design/icons';
import { getItem, MenuItem } from './types';

export const sidebarItems: MenuItem[] = [
  // TODO Localize this line
  getItem('Home', 'home', <HomeOutlined />),
];
