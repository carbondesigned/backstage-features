import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  videos?: boolean;
  contentTitle?: string;
  viewAll?: string;
}

const ContentGrid = (props: Props) => {
  return (
    <div className="w-full p-4 mb-20 md:p-10 lg:p-18">
      <div className="flex items-center w-full justify-between">
        <h3 className="text-6xl py-6 font-bold">{props.contentTitle}</h3>
        <span>
          <Link href={props.viewAll ? props.viewAll : ""}>
            <a className="text-lg text-gray-600">View All</a>
          </Link>
        </span>
      </div>
      <div
        className={`grid gap-4 w-full grid-cols-1  ${
          props.videos
            ? "md:grid-cols-2"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default ContentGrid;
