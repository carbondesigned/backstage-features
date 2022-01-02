import React from "react";

interface Props {
  children: React.ReactNode;
}

const PostLayout = (props: Props) => {
  return <main className="px-10 lg:px-52">{props.children}</main>;
};

export default PostLayout;
