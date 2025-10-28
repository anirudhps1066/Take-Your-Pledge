import { Skeleton } from "./ui/skeleton";
import { Card } from "./ui/card";

export function KPICardSkeleton() {
  return (
    <Card className="p-6 bg-white">
      <div className="flex items-center gap-4">
        <Skeleton className="h-14 w-14 rounded-lg" />
        <div className="flex-1">
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-8 w-32" />
        </div>
      </div>
    </Card>
  );
}

export function PledgeWallSkeleton() {
  return (
    <div className="space-y-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 p-4 border-b">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-4 w-12" />
        </div>
      ))}
    </div>
  );
}

export function ImpactCardSkeleton() {
  return (
    <Card className="h-full border-0 shadow-lg">
      <div className="p-6">
        <Skeleton className="h-12 w-12 rounded-lg mb-4" />
        <Skeleton className="h-6 w-32 mb-2" />
        <Skeleton className="h-16 w-full" />
      </div>
    </Card>
  );
}

export function HeroSkeleton() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-300">
      <div className="text-center space-y-4 px-4 max-w-4xl mx-auto">
        <Skeleton className="h-16 w-full max-w-2xl mx-auto" />
        <Skeleton className="h-8 w-full max-w-xl mx-auto" />
        <Skeleton className="h-12 w-48 mx-auto mt-8" />
      </div>
    </div>
  );
}
