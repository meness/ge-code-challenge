import { gql } from '@apollo/client';
import { pageInfoFragment } from './fragments/page-info-fragment.graphql';

export const queryAnimeGraphQl = gql`
  ${pageInfoFragment}
  query QueryAnime(
    $page: Int!
    $genres: [String!]
    $startDate: FuzzyDateInt!
    $sort: [MediaSort!]
    $perPage: Int!
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        ...PageInfo
      }
      media(type: ANIME, sort: $sort, startDate_greater: $startDate, genre_in: $genres) {
        id
        siteUrl
        title {
          native
        }
      }
    }
  }
`;
