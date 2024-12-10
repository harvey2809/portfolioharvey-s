"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import useGetAllPostList from "@/hooks/useGetAllPostList";

export default function BlogPage() {
  const { posts } = useGetAllPostList();
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6">
        {posts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                <Link
                  href={`/blog/${post.slug}/${post.id}`}
                  className="hover:underline"
                >
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{post.subtitle}</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag.name}
                    </Badge>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {post.publishedAt}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
