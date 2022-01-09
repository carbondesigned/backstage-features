import React from "react";
import Link from "next/link";
import Socials from "./Socials";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Link href="/">
            <a>
              <span className="ml-3 text-xl">Backstage Features</span>
            </a>
          </Link>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2020 Backstage Features
        </p>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
