export { onBeforeResolveProps } from "apps/website/utils/multivariate.ts";
import { MultivariateFlag } from "deco/blocks/flag.ts";

import multivariate, {
  MultivariateProps,
} from "apps/website/utils/multivariate.ts";

import type { Product } from "apps/commerce/types.ts";

export type ProductVariate = Product[] | null;

/**
 * @title ProductVariate
 */
export default function ProductVariate(
  props: MultivariateProps<ProductVariate>,
): MultivariateFlag<ProductVariate> {
  return multivariate(props);
}
