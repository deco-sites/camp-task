import { AppContext } from "deco-sites/camp-task/apps/site.ts";

export interface Props {
  productId: string;
}

export default async function vote(
  props: Props,
  _req: Request,
  _ctx: AppContext,
) {
  const { productId } = props;
  const { siteKey: apiKey } = _ctx;
  const key = await apiKey?.get?.() || "";

  const res = await fetch("https://camp-api.deco.cx/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
    },
    body: JSON.stringify({ productId }),
  });

  if (!res.ok) {
    throw new Error("Failed to send data");
  }

  return res.json();
}
