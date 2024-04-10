import { useSignal } from "@preact/signals";
import Button from "./common.tsx";
import { useUser } from "apps/vtex/hooks/useUser.ts";

import { invoke } from "deco-sites/camp-task/runtime.ts";
import { useUI } from "deco-sites/camp-task/sdk/useUI.ts";

import { Notyf } from "notyf";

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

  const isUserLoggedIn = Boolean(user.value?.email);
  const inWishlist = isVoted.value;

  const addItem = async () => {
    loading.value = true;

    const notyf = new Notyf();

    if (inWishlist) {
      notyf.error("Please fill out the form");

      return;
    }

    await invoke["deco-sites/camp-task"].actions.camp.vote({
      productId: productID,
    });

    notyf.success("Produto curtido!");

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
