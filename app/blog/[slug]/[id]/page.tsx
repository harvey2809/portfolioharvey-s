"use client";
import Image from "next/image";
import { format } from "date-fns";
import { Calendar, Eye, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import useGetPostById from "@/hooks/useGetPostById";
import { isEmpty } from "lodash";
import { notFound } from "next/navigation";
import Loading from "@/app/blog/[slug]/[id]/loading";

export default function BlogPostPage({}) {
  const { post: data, isLoading } = useGetPostById();

  if (isLoading) {
    return <Loading />;
  }
  const { publication } = data ?? {};
  const { post } = publication ?? {};

  if (isEmpty(post)) {
    return notFound();
  }
  return (
    <article className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={post.coverImage.url}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <h2 className="text-2xl text-muted-foreground mb-6">{post.subtitle}</h2>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <time dateTime={post.publishedAt}>
              {format(new Date(post.publishedAt), "MMMM d, yyyy")}
            </time>
          </div>
          <div className="flex items-center">
            <Eye className="w-5 h-5 mr-2" />
            <span>{post.views} views</span>
          </div>
          <div className="flex items-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            <span>{post.reactionCount} reactions</span>
          </div>
        </div>
        <Separator className="my-8" />
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
        <Separator className="my-8" />
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <Badge key={tag.slug} variant="secondary">
              {tag.name}
            </Badge>
          ))}
        </div>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">About this post</h3>
            <p className="text-muted-foreground">{post.brief}</p>
            <div className="mt-4 text-sm text-muted-foreground">
              Last updated: {format(new Date(post.updatedAt), "MMMM d, yyyy")}
            </div>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}
