import Image from "next/image";
import type { IImage } from "types/images";

type Props = {
  images: IImage[];
};

const ImageGrid = ({ images }: Props) => {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
      {images.map((image) => (
        <div
          data-tip="Copy Image URL"
          key={image.ID}
          className="tooltip tooltip-bottom cursor-pointer"
        >
          <div
            className="relative w-full h-64 rounded-xl overflow-hidden duration-200 hover:scale-105"
            onClick={() => navigator.clipboard.writeText(image.imageURL)}
          >
            <Image
              src={image.imageURL}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
