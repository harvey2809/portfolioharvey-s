import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <article className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Skeleton className="w-full h-[400px] mb-8" />
        <Skeleton className="w-3/4 h-10 mb-4" />
        <Skeleton className="w-1/2 h-6 mb-6" />
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Skeleton className="w-32 h-6" />
          <Skeleton className="w-32 h-6" />
          <Skeleton className="w-32 h-6" />
        </div>
        <Skeleton className="w-full h-[1px] my-8" />
        <div className="space-y-4">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-3/4 h-4" />
        </div>
        <Skeleton className="w-full h-[1px] my-8" />
        <div className="flex flex-wrap gap-2 mb-8">
          <Skeleton className="w-20 h-8" />
          <Skeleton className="w-20 h-8" />
          <Skeleton className="w-20 h-8" />
        </div>
        <Card>
          <CardContent className="p-6">
            <Skeleton className="w-1/2 h-6 mb-2" />
            <Skeleton className="w-full h-4 mb-4" />
            <Skeleton className="w-3/4 h-4" />
          </CardContent>
        </Card>
      </div>
    </article>
  );
}
