import Image from "apps/website/components/Image.tsx";
import { usePartialSection as usePartial } from "deco/hooks/usePartialSection.ts";

import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title Partial Image Gallery
 */
export interface Props {
  /**
   * @title Imagens
   * @description Adicione no mínimo três imagens iniciais
   * @titleBy description
   * @minItems 3
   */
  images: Array<{ src: ImageWidget; description: string }>;
  /**
   * @title Quantidade de número de imagens
   * @default 3
   */
  imagesCount: number;

  /**
   * @title Título do botão
   * @default Ver mais
   */
  buttonTitle?: string;
}

export default function PartialImageGallery(
  { images = [], imagesCount = 3, buttonTitle }: Props,
) {
  const isSeeMoreButtonInactive = imagesCount === images.length;

  return (
    <div class="flex items-center justify-center w-full py-8 lg:py-10">
      <div class="flex flex-col items-center justify-center container gap-4 px-4 xl:px-0 w-full">
        <ul class="grid gap-3 items-center justify-center w-full">
          {images.slice(0, imagesCount).map((image) => (
            <li>
              <Image
                src={image.src}
                alt={image.description}
                width={500}
                height={250}
                loading="lazy"
                class="block h-full w-full lg:max-w-[500px] rounded-lg object-cover object-center xl:hover:scale-105 xl:hover:opacity-85 xl:duration-200 xl:transition-all xl:cursor-pointer"
              />
            </li>
          ))}
        </ul>

        {!isSeeMoreButtonInactive && (
          <button
            class="btn mx-auto max-w-[50%]"
            {...usePartial<typeof PartialImageGallery>({
              props: { imagesCount: imagesCount + 1 },
            })}
          >
            {buttonTitle || "Ver mais"}
          </button>
        )}
      </div>
    </div>
  );
}
