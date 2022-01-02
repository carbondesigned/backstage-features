import ContentGrid from "@/components/ContentGrid";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import Navbar from "@/components/Navbar";
import { getPosts } from "@/lib/api";
import { PostType } from "@/lib/types";
import React from "react";

interface Props {
  posts: PostType[];
}

const index = ({ posts }: Props) => {
  return (
    <>
      <Navbar />
      <Layout>
        <ContentGrid contentTitle="Posts">
          {posts &&
            posts.map((post: any) => <Post key={post.title} post={post} />)}
        </ContentGrid>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ preview = false }) {
  const posts: PostType[] = await getPosts(preview);
  return {
    props: { posts, preview },
  };
}

export default index;
