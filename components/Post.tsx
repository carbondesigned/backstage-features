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
    <div className="bg-white rounded w-1/2">
      {/* image */}
      <div className="max-w-full">
        <CoverImage
          imageObject={post.coverImage}
          slug={post.slug}
          title={post.title}
        />
      </div>
      {/* rest */}
      <div>
        {/* date & author */}
        <div>
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <div className="flex items-center">
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
