import { gql } from '@apollo/client';

export const pageInfoFragment = gql`
  fragment PageInfo on PageInfo {
    total
    currentPage
    lastPage
    hasNextPage
  }
`;
