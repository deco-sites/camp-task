import Image from "apps/website/components/Image.tsx";
import { usePartialSection as usePartial } from "deco/hooks/usePartialSection.ts";

import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title Partial Image Gallery
 */
export interface Props {
  title?: string;
  /**
   * @format textarea
   */
  description?: string;
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
  { title, description, images = [], imagesCount = 3, buttonTitle }: Props,
) {
  const isSeeMoreButtonInactive = imagesCount === images.length;

  return (
    <div class="flex items-center justify-center w-full py-8 lg:py-10">
      <div class="flex flex-col items-center justify-center container gap-8 px-4 xl:px-0 w-full">
        <div class="flex flex-col gap-2 w-full items-center justify-center">
          {title && (
            <h1 class="text-2xl tracking-wide leading-tight font-bold">
              {title}
            </h1>
          )}

          {description && <span class="text-center">{description}</span>}
        </div>

        <ul class="grid md:grid-cols-3 gap-3 items-center justify-center w-full">
          {images.slice(0, imagesCount).map((image) => (
            <li>
              <Image
                src={image.src}
                alt={image.description}
                width={500}
                height={250}
                loading="lazy"
                fetchPriority="low"
                class="block h-full w-full lg:max-w-[500px] rounded-lg object-cover object-center xl:hover:scale-105 xl:hover:opacity-85 xl:duration-200 xl:transition-all xl:cursor-pointer"
              />
            </li>
          ))}
        </ul>

        {!isSeeMoreButtonInactive && (
          <button
            class="btn mx-auto max-w-[50%]"
            {...usePartial<typeof PartialImageGallery>({
              props: { imagesCount: imagesCount + 3 },
            })}
          >
            {buttonTitle || "Ver mais"}
          </button>
        )}
      </div>
    </div>
  );
}
