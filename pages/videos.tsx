import React from "react";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import ContentGrid from "@/components/ContentGrid";
import { VideoType } from "@/lib/types";
import axios from "axios";
import Video from "@/components/Video";
import Head from "next/head";

interface Props {
  videos: VideoType[];
}

const videos = ({ videos }: Props) => {
  return (
    <>
      <Head>
        <title>Backstage Features | Videos</title>
        {/* favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Layout>
        <ContentGrid contentTitle="Videos" videos>
          {videos &&
            videos
              .reverse()
              .map((video: any) => (
                <Video
                  videoId={video.contentDetails.videoId}
                  key={video.contentDetails.videoId}
                />
              ))}
        </ContentGrid>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ preview = false }) {
  const { data } = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&playlistId=PLGm4HIhsHl1EMUN035h9P2WQG9MTHFZio&key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return {
    props: { videos: data.items },
  };
}

export default videos;
