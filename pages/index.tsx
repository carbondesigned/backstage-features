import Post from "@/components/Post";
import Head from "next/head";
import { getPosts } from "@/lib/api";
import { PostType, VideoType } from "@/lib/types";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import axios from "axios";
import ContentGrid from "@/components/ContentGrid";
import Video from "@/components/Video";

interface Props {
  children: React.ReactNode;
  posts: PostType[];
  videos: VideoType[];
}

const Home = ({ posts, videos }: Props) => {
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
        <ContentGrid contentTitle="Posts" viewAll="/posts">
          {posts.slice(0, 6).map((post: any) => (
            <Post key={post.title} post={post} />
          ))}
        </ContentGrid>
        {!videos && <p>Loading...</p>}
        <ContentGrid videos contentTitle="Videos" viewAll="/videos">
          {videos &&
            videos
              .slice(0, 4)
              .map((video) => (
                <Video
                  videoId={video.contentDetails.videoId}
                  key={video.contentDetails.videoId}
                />
              ))}
        </ContentGrid>
      </Layout>
    </div>
  );
};

export async function getServerSideProps({ preview = false }) {
  const posts: PostType[] = await getPosts(preview);
  const { data } = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=PLGm4HIhsHl1EMUN035h9P2WQG9MTHFZio&key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return {
    props: { posts, preview, videos: data.items },
  };
}

export default Home;
