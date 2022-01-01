import React from "react";

interface Props {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  type?: "submit" | "reset" | "button";
}

const Button = (props: Props) => {
  return (
    <button
      className={`cursor-pointer py-1 px-4 md:py-2 md:px-6 rounded ${
        props.primary
          ? "bg-[#7000FF] text-white hover:bg-[#5700c8] duration-200"
          : props.secondary
          ? "bg-transparent text-[#7000FF] border-2 border-[#7000FF] hover:bg-[#7000FF] hover:text-white duration-200 "
          : ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
