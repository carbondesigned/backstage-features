import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { imageBuilder } from "@/lib/sanity";

export default function CoverImage({ title, url, imageObject, slug }: any) {
  const image = (
    <Image
      objectFit="cover"
      layout="responsive"
      //   @ts-ignore
      src={imageBuilder(imageObject).width(1240).height(540).url()}
      alt={`Cover Image for ${title}`}
      width={1000}
      height={1000}
      className={cn("shadow-small rounded", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );

  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
