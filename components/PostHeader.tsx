import { PostType } from "@/lib/types";
import React from "react";
import Avatar from "./Avatar";
import CoverImage from "./CoverImage";
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react";

interface Props {
  post: PostType;
}

const PostHeader = ({ post }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-2 py-16 xl:px-56 2xl:px-80">
        <h1 className="text-5xl">{post.title}</h1>
        <p className="text-2xl text-gray-500">
          <BlockContent blocks={post.excerpt} />
        </p>
        <div className="flex gap-2 items-center">
          <div className="block">
            <Avatar author={post.author} />
          </div>
          <span className="text-gray-500">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
      <div className="w-full xl:grid xl:place-items-center">
        <div className="max-w-full xl:w-1/2">
          <CoverImage title={post.title} imageObject={post.coverImage} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
