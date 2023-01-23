import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
{
    products {
      name
      image
      description
      price
    }
  }
`;

export const GET_USER = gql`
{
  me {
    email
    name
  }
}
`;