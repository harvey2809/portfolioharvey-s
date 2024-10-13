

import { PostData } from '@/types/types'
import { GraphQLClient, gql } from 'graphql-request'
import { SearchPostsResponse } from '@/types/types';
const endpoint = process.env.NEXT_GRAPHQL_ENDPOINT || ''

const client = new GraphQLClient(endpoint, {
    headers: {
        Authorization: process.env.NEXT_AUTH_TOKEN || ''
    }
})


const GET_POST_QUERY = gql`
  query getPost($pageSize:Int!, $page:Int!) {
  publication(host: "adityakmr.hashnode.dev") {
    postsViaPage(pageSize:$pageSize,page:$page) {
      pageInfo{
        nextPage,
        previousPage,
        hasNextPage,
        hasPreviousPage,
      }
      nodes {
        coverImage{
          url
        },
        id,
        title,
        brief,
        subtitle,
        slug,
        publishedAt,
        updatedAt,
        content{
          text,
          html,
          markdown
        }
      	tags{
        	slug,
          name
      	}
      }
    }
  }

  } 
`

const GET_POST_OF_PUBLICATION_QUERY = gql`
    query SearchPosts($query: String!, $page: Int!) {
    searchPostsOfPublications(query: $query, page: $page, publicationIds: []) {
      edges {
        node {
          _id
          title
          brief
          slug
          dateAdded
          coverImage {
            url
          }
          tags {
            name
          }
          author {
            username
            name
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`


export const getMyPosts = async (page: number, pageSize: number): Promise<PostData> => {
    return client.request(GET_POST_QUERY, { page, pageSize })
}


export const searchPosts = async (query: string, page: number): Promise<SearchPostsResponse> => {
    return client.request(GET_POST_OF_PUBLICATION_QUERY, { query, page })
}