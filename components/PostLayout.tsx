import React from "react";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

const PostLayout = (props: Props) => {
  return (
    <>
      <main className="w-full px-5 lg:px-52 2xl:px-[28em] pb-20">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default PostLayout;
