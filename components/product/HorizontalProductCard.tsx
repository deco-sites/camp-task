import HorizontalProduct from "./HorizontalProduct.tsx";
import type { Product } from "apps/commerce/types.ts";

export interface Props {
  products: Product[] | null;
  /** @description Preload card image */
  preload?: boolean;
  /** @description used for analytics event */
  itemListName?: string;
}

export default function HorizontalProductCard(
  { products, preload = false, itemListName }: Props,
) {
  if (!products || products.length === 0) return null;

  return (
    <div class="w-full h-full py-8 px-4 xl:px-0">
      <div class="container">
        <div class="flex flex-col gap-3 w-full items-center justify-center">
          {products.map((product, index) => (
            <HorizontalProduct
              product={product}
              preload={preload}
              itemListName={itemListName}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
