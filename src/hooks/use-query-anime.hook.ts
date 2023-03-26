import { useQuery } from '@apollo/client';
import { MediaGenre, MediaPage } from '@common/enums';
import { Media, PageInfo } from '@common/types';
import { queryAnimeGraphQl } from '@graphql';

export type QueryAnimeDataType = {
  Page?: {
    pageInfo: PageInfo;
    media: Media[];
  };
};

export type QueryAnimeVariables = {
  page: number;
  genres: MediaGenre[];
  startDate: number;
  sort: MediaPage[];
  perPage: number;
};

export const useQueryAnime = (variables: QueryAnimeVariables) => {
  return useQuery<QueryAnimeDataType>(queryAnimeGraphQl, { variables });
};
