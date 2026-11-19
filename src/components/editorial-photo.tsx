import Image from "next/image";
import type { EditorialImage } from "@/content/editorial-images";

export function EditorialPhoto({ image, className = "", hero = false, priority = false, square = false }: {
  image: EditorialImage;
  className?: string;
  hero?: boolean;
  priority?: boolean;
  square?: boolean;
}) {
  return (
    <picture className={`editorial-photo ${className}`}>
      {hero && <source media="(max-width: 680px)" srcSet="/images/industrial/warehouse-mobile.webp" />}
      <Image
        src={`/images/industrial/${image.file}.webp`}
        alt={image.alt}
        width={hero ? 1600 : square ? 360 : 600}
        height={hero ? 900 : square ? 360 : 400}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
      />
    </picture>
  );
}
