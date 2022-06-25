import Image from "next/image";
import React from "react";
import type { IImage } from "types/images";
import Alert from "./Alert";

type Props = {
  images: IImage[];
};

const ImageGrid = ({ images }: Props) => {
  const [copied, setCopied] = React.useState(false);

  /* It's checking if the clipboard contains a url (more specifically just a image url). If it does, it sets the copied state to true. */
  React.useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 7000);
  }, [copied, navigator.clipboard]);

  return (
    <div className="grid gap-10 grid-cols-1 lg:grid-cols-3">
      <Alert
        message="Successfully copied image URL!"
        show={copied}
        alert="success"
      />
      {images.map((image) => (
        <div
          data-tip="Copy Image URL"
          key={image.ID}
          className="tooltip tooltip-bottom cursor-pointer"
        >
          <div
            className="relative w-full h-64 rounded-xl overflow-hidden duration-200 hover:scale-105"
            onClick={() => {
              navigator.clipboard.writeText(image.imageURL);
              setCopied(true);
            }}
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
