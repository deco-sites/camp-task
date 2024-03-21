import Image from "apps/website/components/Image.tsx";
import WishlistButtonVtex from "../../islands/WishlistButton/vtex.tsx";
import AddToCartButton from "../../islands/AddToCartButton/vtex.tsx";

import { SendEventOnClick } from "../../components/Analytics.tsx";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";

import { relative } from "../../sdk/url.ts";
import { formatPrice } from "../../sdk/format.ts";
import { useOffer } from "../../sdk/useOffer.ts";

import type { Product } from "apps/commerce/types.ts";

export interface Props {
  product: Product;
  /** @description Preload card image */
  preload?: boolean;
  /** @description used for analytics event */
  itemListName?: string;

  /** @description index of the product card in the list */
  index?: number;
}

const WIDTH = 200;
const HEIGHT = 279;

export default function HorizontalProduct(
  { product, preload = false, itemListName, index }: Props,
) {
  const { url, productID, name, image: images, offers, isVariantOf } = product;
  const id = `product-card-${productID}`;

  const { listPrice, price, installments, seller } = useOffer(offers);

  const productGroupID = isVariantOf?.productGroupID;
  const description = product.description || isVariantOf?.description;

  const [front] = images ?? [];

  const eventItem = mapProductToAnalyticsItem({
    product,
    price,
    listPrice,
    quantity: 1,
    index,
  });

  return (
    <div
      id={id}
      class="flex items-center p-3 w-full max-w-[964px] bg-zinc-900 text-white rounded-md"
      data-deco="view-product"
    >
      <SendEventOnClick
        id={id}
        event={{
          name: "select_item" as const,
          params: {
            item_list_name: itemListName,
            items: [
              mapProductToAnalyticsItem({
                product,
                price,
                listPrice,
                index,
              }),
            ],
          },
        }}
      />
      <div class="flex flex-col lg:flex-row items-center gap-4 w-full">
        <a
          href={url && relative(url)}
          aria-label="view product"
        >
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={WIDTH}
            height={HEIGHT}
            sizes="(max-width: 1024px) 200px, 250px"
            class="hover:scale-105 hover:opacity-85 duration-200 transition-all rounded-md"
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            decoding="async"
          />
        </a>

        <div class="grid md:grid-cols-2 lg:flex lg:flex-row items-center justify-center lg:justify-between gap-2 w-full">
          <div class="flex flex-col gap-4 lg:flex-2">
            <h2
              class="truncate text-base lg:text-lg capitalize font-normal"
              dangerouslySetInnerHTML={{ __html: name ?? "" }}
            />

            <div class="flex items-center gap-2">
              <div class="rating">
                <input
                  readOnly
                  aria-label="rating"
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  readOnly
                  aria-label="rating"
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  readOnly
                  aria-label="rating"
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  readOnly
                  aria-label="rating"
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  readOnly
                  aria-label="rating"
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>

              <span class="text-lg">310</span>
            </div>

            <div
              class="truncate text-sm"
              dangerouslySetInnerHTML={{ __html: description ?? "" }}
            />
          </div>

          <div class="flex flex-col justify-between md:border-l md:pl-6 lg:max-w-[235px] w-full h-full gap-2">
            <div class="flex items-center gap-1">
              <div class="text-lg">
                {formatPrice(price, offers?.priceCurrency)}
              </div>

              <div class="line-through text-red-500 text-sm">
                {formatPrice(listPrice, offers?.priceCurrency)}
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <AddToCartButton
                seller={seller!}
                productID={productID}
                eventParams={{ items: [eventItem] }}
              />

              <WishlistButtonVtex
                productGroupID={productGroupID}
                productID={productID}
                variant="full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
