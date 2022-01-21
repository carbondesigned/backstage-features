import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  type?: "submit" | "reset" | "button";
  href?: string;
}

const Button = (props: Props) => {
  return (
    <Link href={props.href ? props.href : ""}>
      <a>
        <button
          className={`cursor-pointer rounded ${
            props.primary
              ? "bg-[#7000FF] text-white hover:bg-[#5700c8] duration-200 py-1 px-4 md:py-2 md:px-6 "
              : props.secondary
              ? "bg-transparent text-[#7000FF] border-2 border-[#7000FF] hover:bg-[#7000FF] hover:text-white duration-200  py-1 px-4 md:py-1.5 md:px-6"
              : ""
          }`}
        >
          {props.children}
        </button>
      </a>
    </Link>
  );
};

export default Button;
