import HorizontalProduct from "./HorizontalProduct.tsx";

import type { ProductVariate } from "deco-sites/camp-task/flags/multivariate/productVariate.ts";
import type { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  title?: HTMLWidget;
  description?: HTMLWidget;
  products: ProductVariate;
  /** @description Preload card image */
  preload?: boolean;
  /** @description used for analytics event */
  itemListName?: string;

  maxWidth?:
    | "max-w-xl"
    | "max-w-2xl"
    | "max-w-3xl"
    | "max-w-4xl"
    | "max-w-5xl"
    | "max-w-6xl"
    | "max-w-7xl"
    | "max-w-full";
  /**
   * @default true
   */
  animateImage?: boolean;
}

export default function HorizontalProductCard(
  {
    title,
    description,
    products,
    preload = false,
    itemListName,
    maxWidth = "max-w-full",
    animateImage,
  }: Props,
) {
  if (!products || products.length === 0) return null;

  const hasHeader = title || description;

  return (
    <div class="w-full h-full py-8 px-4 xl:px-0">
      <div class={`flex flex-col container ${maxWidth}`}>
        {hasHeader && (
          <div class="flex flex-col my-4">
            <div dangerouslySetInnerHTML={{ __html: title || "" }} />
            <div dangerouslySetInnerHTML={{ __html: description || "" }} />
          </div>
        )}
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
