import { useSignal } from "@preact/signals";

export interface Props {
  couponCode: string;
  buttonLabel?: string;
}

export default function CopyToClipboard({
  couponCode,
  buttonLabel,
}: Props) {
  const isCouponCopied = useSignal(false);

  function handleCopyToClipboard() {
    self.navigator.clipboard
      .writeText(couponCode)
      .then(() => {
        alert("Cupom copiado!");
      })
      .finally(() => {
        isCouponCopied.value = true;
      });
  }

  return (
    <button
      id="cpnBtn"
      aria-label="Copy to clipboard"
      onClick={handleCopyToClipboard}
      class="border border-white bg-white text-purple-600 px-4 py-2 rounded-r cursor-pointer hover:scale-105 duration-150 transition-transform ease-in-out"
    >
      {isCouponCopied.value ? "Cupom copiado" : buttonLabel}
    </button>
  );
}
