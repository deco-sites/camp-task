import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

import Rating from "deco-sites/camp-task/components/daisy/Rating.tsx";

import { invoke } from "deco-sites/camp-task/runtime.ts";
import { useUI } from "deco-sites/camp-task/sdk/useUI.ts";

export interface Props {
  productId: string;
}

export default function ProductVotes({ productId }: Props) {
  const { totalVotes } = useUI();
  const productVotes = useSignal(0);

  const loading = useSignal(false);

  useEffect(() => {
    async function getTotalVotes() {
      loading.value = true;

      const votes = await invoke["deco-sites/camp-task"].loaders.camp
        .votesPerProduct({ productId });

      productVotes.value = votes.product;

      loading.value = false;
    }

    getTotalVotes();
  }, [totalVotes.value]);

  if (loading.value) return <div class="loading loading-spinner" />;

  return (
    <div class="flex items-center gap-2">
      <Rating rating={5} maxRating={5} />

      <span class="text-lg">{productVotes.value}</span>
    </div>
  );
}
