import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

import Icon from "./Icon.tsx";

import { invoke } from "deco-sites/camp-task/runtime.ts";
import { useUI } from "deco-sites/camp-task/sdk/useUI.ts";

export default function TotalVotes() {
  const loading = useSignal(false);
  const { totalVotes } = useUI();

  useEffect(() => {
    async function getTotalVotes() {
      loading.value = true;

      const votes = await invoke["deco-sites/camp-task"].loaders.camp.votes();

      totalVotes.value = votes.total;
      loading.value = false;
    }

    getTotalVotes();
  }, [totalVotes.value]);

  if (loading.value) return <div class="loading loading-spinner" />;

  return (
    <div
      title="Total de Votos"
      class="flex items-center justify-center gap-1 border py-1 px-2 rounded-md"
    >
      <Icon id="Friends" size={24} />
      <span>{totalVotes.value}</span>
    </div>
  );
}
