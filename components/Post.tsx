import React from "react";
import Image from "next/image";
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react";

import { PostType } from "@/lib/types";
import CoverImage from "./CoverImage";

interface Props {
  post: PostType;
}

const Post = ({ post }: Props) => {
  console.log(post);
  return (
    <div className="bg-white rounded w-full overflow-hidden">
      {/* image */}
      <div className="max-w-full">
        <CoverImage
          imageObject={post.coverImage}
          slug={post.slug}
          title={post.title}
        />
      </div>
      {/* rest */}
      <div className="px-4 py-6 flex flex-col gap-4">
        {/* date & author */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 rounded-full overflow-hidden">
              <Image
                src={post.author.picture}
                alt={post.author.name}
                layout="responsive"
                width={50}
                height={50}
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <span>{post.author.name}</span>
          </div>
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        {/* title & excerpt */}
        <div>
          <h1 className="text-2xl font-medium">{post.title}</h1>
          <BlockContent blocks={post.excerpt} />
        </div>
      </div>
    </div>
  );
};

export default Post;
