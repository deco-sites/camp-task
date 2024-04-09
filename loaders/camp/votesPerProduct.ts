import { AppContext } from "deco-sites/camp-task/apps/site.ts";

export interface Votes {
  product: number;
}

export interface Props {
  productId: string;
}

export default async function votesPerProduct(
  props: Props,
  _req: Request,
  _ctx: AppContext,
): Promise<Votes> {
  const { productId } = props;
  const { siteKey: apiKey } = _ctx;
  const key = await apiKey?.get?.() || "";

  const votes = await fetch(`https://camp-api.deco.cx/event/${productId}`, {
    headers: { "x-api-key": key },
  }).then((res) => res.json());

  return votes;
}
