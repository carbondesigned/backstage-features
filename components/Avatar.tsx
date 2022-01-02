import Image from "next/image";
import React from "react";

interface Props {
  author: any;
}

const Avatar = ({ author }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-12 w-12 rounded-full overflow-hidden">
        <Image
          src={author.picture}
          alt={author.name}
          layout="responsive"
          width={50}
          height={50}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <span>
        <p className="text-lg">{author.name}</p>
      </span>
    </div>
  );
};

export default Avatar;
