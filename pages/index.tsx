import Post from "@/components/Post";
import Head from "next/head";
import { getPosts } from "@/lib/api";
import { PostType } from "@/lib/types";
import Layout from "@/components/Layout";

interface Props {
  children: React.ReactNode;
  posts: PostType[];
}
const Home = ({ posts }: Props) => {
  return (
    <div>
      <Head>
        <title>Backstage Features</title>
        <meta
          name="description"
          content="Interviews, articles about your favorite celebrities with Gracie Lowes & Backstage Features"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Test</h1>
        {!posts && <p>Loading...</p>}
        {posts.map((post: any) => (
          <Post key={post.title} post={post} />
        ))}
      </Layout>
    </div>
  );
};

export async function getServerSideProps({ preview = false }) {
  const posts: PostType[] = await getPosts(preview);
  return {
    props: { posts, preview },
  };
}

export default Home;
