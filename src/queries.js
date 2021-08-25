import gql from 'graphql-tag';

export const SEARCH_FOR_REPOS = gql`
{
    search(query: "language:JavaScript", type: REPOSITORY, first: 20) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            owner {
              ... on Organization {
                name
              }
            }
            openGraphImageUrl
            stargazers(orderBy: {field: STARRED_AT, direction: DESC}) {
              totalCount
            }
            updatedAt
          }
        }
      }
    }
  }
`;
