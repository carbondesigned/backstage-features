import { PostType } from "@/lib/types";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

import React from "react";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import PostLayout from "@/components/PostLayout";
import PostBody from "@/components/PostBody";
import Head from "next/head";
import PostHeader from "@/components/PostHeader";
import Navbar from "@/components/Navbar";

interface Props {
  post: PostType;
  morePosts: PostType[];
}

const Post = ({ post, morePosts }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Navbar />
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <PostLayout>
          <article className="w-full">
            <PostHeader post={post} />
            <PostBody content={post.body} />
          </article>
        </PostLayout>
      )}
    </>
  );
};

export async function getStaticProps({ params, preview = false }: any) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  const paths =
    allPosts?.map((post: PostType) => ({
      params: {
        slug: post.slug,
      },
    })) || [];
  return {
    paths,
    fallback: false,
  };
}

export default Post;
