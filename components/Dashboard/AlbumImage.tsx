import Image from "next/image";
type Props = {
  alt: string;
  image: string;
};
const AlbumImage = ({ alt, image }: Props) => {
  return (
    <div className="relative h-52 w-full rounded-xl overflow-hidden">
      <Image
        src={image}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};

export default AlbumImage;
