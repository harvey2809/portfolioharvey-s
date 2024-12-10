"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PostByIdResponse } from "@/types/types";
import { getPostBySlug } from "@/lib/graphqlClient";

const useGetPostById = () => {
  const params = useParams<{ slug: string; id: string }>();
  const [post, setPost] = useState<PostByIdResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log("params", params);

  useEffect(() => {
    async function fetchPost() {
      try {
        setIsLoading(true);
        const response = await getPostBySlug(params.slug);
        console.log("response", response);
        setPost(response);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unexpected error occurred";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPost();
  }, [params.slug]);
  return { post, isLoading, error };
};

export default useGetPostById;
