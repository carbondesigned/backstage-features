import Link from "next/link";
import React from "react";
import Button from "./Button";

interface Props {
  children: React.ReactNode;
  videos?: boolean;
  contentTitle?: string;
  viewAll?: string;
}

const ContentGrid = (props: Props) => {
  return (
    <div className="w-full mb-20">
      <div className="flex items-center w-full justify-between">
        <h3 className="text-6xl py-6 font-bold">{props.contentTitle}</h3>
        {props.viewAll && (
          <span>
            <Button secondary href={props.viewAll}>
              View All
            </Button>
          </span>
        )}
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
