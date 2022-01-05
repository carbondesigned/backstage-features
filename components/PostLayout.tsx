import React from "react";

interface Props {
  children: React.ReactNode;
}

const PostLayout = (props: Props) => {
  return (
    <main className="w-full px-5 lg:px-52 2xl:px-[28em]">{props.children}</main>
  );
};

export default PostLayout;
