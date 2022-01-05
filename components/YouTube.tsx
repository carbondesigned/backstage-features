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
  return <PortableText blocks={blocks} serializers={serializers} />;
}
