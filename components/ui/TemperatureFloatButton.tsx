import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
  temperature: Temperature | null;
}

function TemperatureFloatButton({ temperature }: Props) {
  if (!temperature) {
    return null;
  }

  const backgroundColor = temperature.celsius < 15
    ? "from-sky-600 to-sky-800"
    : "from-orange-600 to-red-800";

  return (
    <div class="fixed bottom-6 right-6 z-40">
      <div
        class={`py-2 px-6 rounded-full shadow-lg bg-gradient-to-b text-white text-2xl ${backgroundColor}`}
      >
        {temperature.celsius}°C
      </div>
    </div>
  );
}

export default TemperatureFloatButton;
