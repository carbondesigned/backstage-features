import markdownStyles from "./markdown-styles.module.css";
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react";

export default function PostBody({ content }: any) {
  return (
    <div className="w-full xl:px-56 2xl:px-80">
      <BlockContent
        blocks={content}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        className={markdownStyles.markdown}
      />
    </div>
  );
}
