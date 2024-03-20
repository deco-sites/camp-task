import { Temperature } from "apps/weather/loaders/temperature.ts";

import type { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  text: HTMLWidget;
  position?: "flex-col" | "flex-col-reverse" | "flex-row" | "flex-row-reverse";
  alignment?: "items-start" | "items-center" | "items-end";
  temperature: Temperature | null;
}

export default function TemperatureText(
  { text, position = "flex-col", alignment = "items-center", temperature }:
    Props,
) {
  if (!temperature) return null;

  const textColor = temperature.celsius < 15
    ? "from-blue-600 via-sky-500 to-blue-800"
    : "from-red-600 via-orange-500 to-red-800";

  return (
    <div
      class={`flex justify-center py-6 px-4 container gap-8 ${position} ${alignment}`}
    >
      <h1
        class={`bg-gradient-to-r inline-block text-transparent bg-clip-text text-6xl ${textColor}`}
      >
        {temperature.celsius}°C
      </h1>
      <div dangerouslySetInnerHTML={{ __html: text || "" }} />
    </div>
  );
}
