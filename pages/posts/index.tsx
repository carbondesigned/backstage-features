import ContentGrid from "@/components/ContentGrid";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import Navbar from "@/components/Navbar";
import { getPosts } from "@/lib/api";
import { PostType } from "@/lib/types";
import React from "react";
import Head from "next/head";

interface Props {
  posts: PostType[];
}

const index = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>Backstage Features | Posts</title>
      </Head>
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
