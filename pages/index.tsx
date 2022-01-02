import Post from "@/components/Post";
import Head from "next/head";
import { getPosts } from "@/lib/api";
import { PostType } from "@/lib/types";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

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
      <Navbar />
      <Hero />
      <Layout>
        {!posts && <p>Loading...</p>}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full p-4 md:p-10 lg:p-18">
          {posts.map((post: any) => (
            <Post key={post.title} post={post} />
          ))}
        </div>
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
