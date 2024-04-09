import { AppContext } from "deco-sites/camp-task/apps/site.ts";

export interface Votes {
  total: number;
}

export default async function votes(
  _props: unknown,
  _req: Request,
  _ctx: AppContext,
): Promise<Votes> {
  const { siteKey: apiKey } = _ctx;
  const key = await apiKey?.get?.() || "";

  const votes = await fetch("https://camp-api.deco.cx/events", {
    headers: { "x-api-key": key },
  }).then((res) => res.json());

  return votes;
}
