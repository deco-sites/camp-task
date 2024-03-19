import Image from "apps/website/components/Image.tsx";
import type { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";

import CopyToClipboard from "../../islands/CopyToClipboard.tsx";

export interface Props {
  logo?: ImageWidget;
  couponCode: string;
  description: HTMLWidget;
  buttonLabel?: string;
  availableUntil?: string;
}

export default function Coupon({
  logo,
  couponCode = "CUPOM20",
  description = "<span>Descrição do seu cupom</span>",
  buttonLabel = "Copy Code",
  availableUntil = "Valid Till: 20Dec, 2021",
}: Props) {
  return (
    <div class="container mx-auto py-12">
      <div class="bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center py-10 px-20 rounded-lg shadow-md relative">
        {logo && (
          <Image
            src={logo}
            width={20}
            height={20}
            class="w-20 mx-auto mb-4 rounded-lg"
          />
        )}

        <div dangerouslySetInnerHTML={{ __html: description || "" }} />

        <div class="flex items-center justify-center space-x-2 mt-4 mb-6">
          <span
            id="cpnCode"
            class="border-dashed border text-white px-4 py-2 rounded-l"
          >
            {couponCode}
          </span>
          <CopyToClipboard couponCode={couponCode} buttonLabel={buttonLabel} />
        </div>

        <p class="text-sm">{availableUntil}</p>
      </div>
    </div>
  );
}
