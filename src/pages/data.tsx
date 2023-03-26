import { Media } from '@common/types';
import { TableColumnsType } from 'antd';

export const animeTablePageSize = 20;

export const animeTableColumns: TableColumnsType<Media> = [
  {
    title: 'Title',
    render: (text, record) => {
      return record.title.native;
    },
    key: 'title',
  },
  { title: 'Link', dataIndex: 'siteUrl', key: 'siteUrl' },
];
