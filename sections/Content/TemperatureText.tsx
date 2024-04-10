export { default } from "../../components/ui/TemperatureText.tsx";

export function LoadingFallback() {
  return (
    <div class="flex justify-center items-center h-screen lg:h-[404px] min-w-screen">
      <span class="loading loading-spinner" />
    </div>
  );
}
