import { MatchContext } from "deco/blocks/matcher.ts";

export interface Props {
  value: string;
}

/**
 * @title Utm Query String
 * @description Match with a specific querystring
 * @icon question-mark
 */
const utm = (props: Props, { request }: MatchContext) => {
  const url = new URL(request.url);
  const queryStringValue = url.searchParams.get("utmcampaign");

  return queryStringValue === props.value;
};

export default utm;
