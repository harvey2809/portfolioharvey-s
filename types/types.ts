import { Int } from "graphql-request/alpha/schema/scalars";

export interface Content {
  text: string;
  html: string;
  markdown: string;
}
export interface Tag {
  slug: string;
  name: string;
}

export interface CoverImage {
  url: string;
}

export interface Post {
  coverImage: CoverImage;
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  content: Content;
  tags: Tag[];
  brief: string;
  reactionCount: number;
  views: number;
}

export interface OffsetPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  previousPage: Int;
  nextPage: Int;
}

export interface PublicationPageConnection {
  nodes: [Post];
  pageInfo: OffsetPageInfo;
  totalDocuments: Int;
}

export interface SearchPostsResponse {
  searchPostsOfPublications: {
    edges: {
      node: Post;
    }[];
    pageInfo: OffsetPageInfo;
  };
}
export interface PostData {
  publication: PublicationPageConnection;
}

export interface PostByIdResponse {
  publication: {
    post: Post;
  };
}
