export interface Props {
  skeletonType: SkeletonType;
}

type SkeletonType = "square" | "circle" | "rectangle" | "horizontalCard";

function SquareSkeleton() {
  return <div class="skeleton w-32 h-32" />;
}

function HorizontalCardSkeleton() {
  return (
    <div class="skeleton w-[90vw] h-[450px] md:w-[744px] md:h-[352px] lg:w-[940px] lg:h-[186px] rounded-md" />
  );
}

function CircleSkeleton() {
  return (
    <div class="flex flex-col gap-4 w-52">
      <div class="flex gap-4 items-center">
        <div class="skeleton w-16 h-16 rounded-full shrink-0" />
        <div class="flex flex-col gap-4">
          <div class="skeleton h-4 w-20" />
          <div class="skeleton h-4 w-28" />
        </div>
      </div>
      <div class="skeleton h-32 w-full" />
    </div>
  );
}

function RectangleSkeleton() {
  return (
    <div class="flex flex-col gap-4 w-52">
      <div class="skeleton h-32 w-full" />
      <div class="skeleton h-4 w-28" />
      <div class="skeleton h-4 w-full" />
      <div class="skeleton h-4 w-full" />
    </div>
  );
}

export default function Skeleton(props: Props) {
  const { skeletonType } = props;

  return (
    <>
      {skeletonType === "square" && <SquareSkeleton />}
      {skeletonType === "circle" && <CircleSkeleton />}
      {skeletonType === "rectangle" && <RectangleSkeleton />}
      {skeletonType === "horizontalCard" && <HorizontalCardSkeleton />}
    </>
  );
}
