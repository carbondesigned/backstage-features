import markdownStyles from "./markdown-styles.module.css";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react";

const serializers = {
  types: {
    youtube: ({ node }: any) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id ? id : ""} />;
    },
  },
};

export default function PostBody({ content }: any) {
  return (
    <div className="w-full xl:px-56 2xl:px-80">
      <BlockContent
        blocks={content}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        className={markdownStyles.markdown}
        serializers={serializers}
      />
    </div>
  );
}
