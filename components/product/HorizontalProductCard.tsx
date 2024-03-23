import HorizontalProduct from "./HorizontalProduct.tsx";
import Skeleton from "../daisy/Skeleton.tsx";
import type { Product } from "apps/commerce/types.ts";

export interface Props {
  products: Product[] | null;
  /** @description Preload card image */
  preload?: boolean;
  /** @description used for analytics event */
  itemListName?: string;

  maxWidth?: "max-w-xl" | "max-w-2xl" | "max-w-3xl" | "max-w-4xl" | "max-w-5xl" | "max-w-6xl" | "max-w-7xl" | "max-w-full";
  /**
   * @default true
   */
  animateImage?: boolean;
}

export function LoadingFallback() {
  return (
    <div class="w-full h-full py-8 px-4 xl:px-0">
      <div class="container">
        <div class="flex flex-col gap-3 w-full items-center justify-center">
          <Skeleton skeletonType="horizontalCard" />
          <Skeleton skeletonType="horizontalCard" />
          <Skeleton skeletonType="horizontalCard" />
          <Skeleton skeletonType="horizontalCard" />
        </div>
      </div>
    </div>
  );
}

export default function HorizontalProductCard(
  { products, preload = false, itemListName, maxWidth = "max-w-full", animateImage }: Props,
) {
  if (!products || products.length === 0) return null;

  return (
    <div class="w-full h-full py-8 px-4 xl:px-0">
      <div class={`container ${maxWidth}`}>
        <div class="flex flex-col gap-3 w-full items-center justify-center">
          {products.map((product, index) => (
            <HorizontalProduct
              product={product}
              preload={preload}
              itemListName={itemListName}
              animateImage={animateImage}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
