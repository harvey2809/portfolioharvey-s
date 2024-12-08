"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, ChevronRight, Search } from "lucide-react";
import { get } from "lodash";
import { OffsetPageInfo, Post, PostData } from "@/types/types";
import { getMyPosts } from "@/lib/graphqlClient";

const FeaturedPost = ({ post }: { post: Post }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ y }}
      className="relative overflow-hidden rounded-xl shadow-2xl mb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/70 to-pink-500/70 mix-blend-multiply" />
      <Image
        src={post.coverImage?.url || "/placeholder.svg?height=600&width=800"}
        alt={post.title}
        width={800}
        height={600}
        className="w-full h-[60vh] object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
          <p className="text-lg mb-4">{post.brief}</p>
          <div className="flex items-center text-sm mb-4">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge
                key={tag.name}
                variant="secondary"
                className="bg-white/20 text-white"
              >
                {tag.name}
              </Badge>
            ))}
          </div>
          <Button className="bg-white text-purple-600 hover:bg-purple-100">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const BlogPost = ({ post, index }: { post: Post; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48">
        <Image
          src={post.coverImage?.url || "/placeholder.svg?height=400&width=600"}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 mix-blend-multiply" />
      </div>
      <CardContent className="flex-grow p-6">
        <CardTitle className="text-xl font-bold mb-2 line-clamp-2">
          {post.title}
        </CardTitle>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.brief}
        </p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag.name} variant="secondary">
              {tag.name}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full group">
          Read More
          <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

const ShimmerEffect = () => (
  <div className="animate-pulse">
    <div className="h-48 bg-gray-300 rounded-t-lg dark:bg-gray-700 mb-4" />
    <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 mb-2" />
    <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 w-3/4 mb-2" />
    <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 w-1/2" />
  </div>
);

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [pageInfo, setPageInfo] = useState<OffsetPageInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  let observerRef = useRef<IntersectionObserver | null>(null);
  const lastPostElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observerRef.current) observerRef?.current?.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && pageInfo?.hasNextPage) {
          setCurrentPage((prevPage) => Number(pageInfo.nextPage) - 1);
        }
      });
      if (node) observerRef.current?.observe(node);
    },
    [isLoading, pageInfo?.hasNextPage]
  );

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

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.brief.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Blog
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {posts.length === 0 && isLoading ? (
            <div className="space-y-8">
              <ShimmerEffect />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ShimmerEffect />
                <ShimmerEffect />
                <ShimmerEffect />
              </div>
            </div>
          ) : (
            <>
              {searchTerm === "" && posts.length > 0 && (
                <FeaturedPost post={posts[0]} />
              )}

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts
                  .slice(searchTerm === "" ? 1 : 0)
                  .map((post, index) => (
                    <div
                      key={post.id}
                      ref={
                        index === filteredPosts.length - 1
                          ? lastPostElementRef
                          : null
                      }
                    >
                      <BlogPost post={post} index={index} />
                    </div>
                  ))}
              </div>
            </>
          )}

          <div className="mt-12">
            {isLoading && (
              <div className="mt-8 flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
