/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWallet = /* GraphQL */ `
  query GetWallet($id: ID!) {
    getWallet(id: $id) {
      id
      address
      memo
      crypto
      createdAt
      updatedAt
    }
  }
`;
export const listWallets = /* GraphQL */ `
  query ListWallets(
    $filter: ModelWalletFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWallets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        memo
        crypto
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
