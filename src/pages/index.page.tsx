import { MediaGenre, MediaPage } from '@common/enums';
import { Media } from '@common/types';
import { QueryAnimeDataType, QueryAnimeVariables, useQueryAnime } from '@hooks';
import { GeneralLayout } from '@layouts';
import { Table } from 'antd';
import { ReactElement, useState } from 'react';
import { animeTableColumns, animeTablePageSize } from './data';

const HomePage = () => {
  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);
  const [
    pageSize,
    setPageSize,
  ] = useState(animeTablePageSize);
  const { data, loading, fetchMore } = useQueryAnime({
    genres: [MediaGenre.ACTION],
    page: currentPage,
    sort: [MediaPage.START_DATE],
    startDate: 20200101,
    perPage: pageSize,
  });

  return (
    <Table
      columns={animeTableColumns}
      loading={loading}
      rowKey={(record: Media) => {
        return record.id;
      }}
      pagination={{
        pageSize,
        simple: true,
        total: data?.Page?.pageInfo.total,
        defaultPageSize: animeTablePageSize,
        current: currentPage,
        onChange: (changedPage, changedPageSize) => {
          setCurrentPage(changedPage);
          setPageSize(changedPageSize);

          fetchMore<QueryAnimeDataType, QueryAnimeVariables>({
            variables: { page: changedPage, perPage: changedPageSize },
          });
        },
      }}
      dataSource={data?.Page?.media || []}
    />
  );
};

HomePage.getLayout = (page: ReactElement) => {
  return <GeneralLayout>{page}</GeneralLayout>;
};

export default HomePage;
