import { useSignal } from "@preact/signals";
import Button from "./common.tsx";
import { useUser } from "apps/vtex/hooks/useUser.ts";

import { invoke } from "deco-sites/camp-task/runtime.ts";
import { useUI } from "deco-sites/camp-task/sdk/useUI.ts";

export interface Props {
  productID: string;
  productGroupID?: string;
  variant?: "icon" | "full";
}

function WishlistButton({
  variant = "icon",
  productGroupID,
  productID,
}: Props) {
  const { totalVotes } = useUI();
  const { user } = useUser();
  const loading = useSignal(false);
  const isVoted = useSignal(false);

  const isUserLoggedIn = true;
  const inWishlist = isVoted.value;

  const addItem = async () => {
    loading.value = true;

    if (isVoted.value) {
      alert("Produto já foi curtido.");
      return;
    }

    await invoke["deco-sites/camp-task"].actions.camp.vote({
      productId: productID,
    });

    alert("Produto curtido!");

    isVoted.value = true;
    loading.value = false;

    totalVotes.value += 1;
  };

  const removeItem = async () => {};

  return (
    <Button
      loading={loading.value}
      inWishlist={inWishlist}
      isUserLoggedIn={isUserLoggedIn}
      variant={variant}
      productGroupID={productGroupID}
      productID={productID}
      removeItem={() => removeItem()}
      addItem={() => addItem()}
    />
  );
}

export default WishlistButton;
