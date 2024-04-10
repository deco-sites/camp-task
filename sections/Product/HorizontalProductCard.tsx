export { default } from "../../components/product/HorizontalProductCard.tsx";

export function ErrorFallback() {
  return (
    <div class="flex flex-col items-center justify-center gap-4 w-full container px-4 xl:px-0">
      <h1>Nossa cultura é extremamente vasta e bela!</h1>
      <p>Você sabia que o Brasil tem lindas paisagens aqui pelo Nordeste?</p>
      <a href="/cultura" class="btn">Saiba Mais</a>
    </div>
  );
}

export function LoadingFallback() {
  return (
    <div class="flex justify-center items-center h-[1988px] md:h-[1540px] lg:h-[780.44px]">
      <span class="loading loading-spinner" />
    </div>
  );
}
