import { PostByIdResponse, PostData } from "@/types/types";
import { GraphQLClient } from "graphql-request";
import getPostsQuery from "./queries/getPosts.graphql";
import getPostQuery from "./queries/getPost.graphql";

const endpoint = process.env.NEXT_GRAPHQL_ENDPOINT || "";
export const client = new GraphQLClient("https://gql.hashnode.com", {
  headers: {
    Authorization: process.env.NEXT_AUTH_TOKEN || "",
  },
});
export const queries = {
  getPost: getPostQuery,
  getPosts: getPostsQuery,
};

// Get posts list
export const getMyPosts = async (
  page: number,
  pageSize: number
): Promise<PostData> => {
  return client.request(queries.getPosts, { page, pageSize });
};
// get post by slug
export const getPostBySlug = async (
  slug: string
): Promise<PostByIdResponse> => {
  return client.request(queries.getPost, { slug });
};
