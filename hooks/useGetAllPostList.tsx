"use client";
import { useEffect, useState } from "react";
import { OffsetPageInfo, Post, PostData } from "@/types/types";
import { getMyPosts } from "@/lib/graphqlClient";
import { get } from "lodash";

const useGetAllPostList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [pageInfo, setPageInfo] = useState<OffsetPageInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const data: PostData = await getMyPosts(currentPage, 10);
        const posts = get(data, "publication.postsViaPage.nodes", []);
        const pageInfo: OffsetPageInfo | null = get(
          data,
          "publication.postsViaPage.pageInfo",
          null
        );
        setPosts(posts);
        setPageInfo(pageInfo);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
      setIsLoading(false);
    };

    fetchPosts();
  }, [currentPage]);
  return { isLoading, posts, pageInfo };
};

export default useGetAllPostList;
