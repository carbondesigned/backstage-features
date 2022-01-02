import React from "react";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import ContentGrid from "@/components/ContentGrid";
import { VideoType } from "@/lib/types";
import axios from "axios";
import Video from "@/components/Video";

interface Props {
  videos: VideoType[];
}

const videos = ({ videos }: Props) => {
  return (
    <>
      <Navbar />
      <Layout>
        <ContentGrid contentTitle="Videos" videos>
          {videos &&
            videos.map((video: any) => (
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
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=PLGm4HIhsHl1EMUN035h9P2WQG9MTHFZio&key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return {
    props: { videos: data.items },
  };
}

export default videos;
