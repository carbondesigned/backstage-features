import React from "react";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
  full?: boolean;
  hero?: boolean;
}

const Layout = (props: Props) => {
  return (
    <>
      <main
        className={`bg-gray-100 p-4 md:p-10 lg:p-52 ${
          props.full && "min-h-screen"
        }`}
      >
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
