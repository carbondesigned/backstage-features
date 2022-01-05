import React from "react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
// @ts-ignore
import PortableText from "@sanity/block-content-to-react";

const serializers = {
  types: {
    youtube: ({ node }: any) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id ? id : ""} />;
    },
  },
};

export default function Youtube({ blocks }: any) {
  return (
    <div className="max-w-full w-12 h-96 md:h-[28em]">
      <PortableText
        className="w-12"
        blocks={blocks}
        serializers={serializers}
      />
    </div>
  );
}
