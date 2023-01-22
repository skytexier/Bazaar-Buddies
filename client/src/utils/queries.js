import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
{
    products {
      _id
      name
      description
      price
      category {
        name
      }
    }
  }
`;