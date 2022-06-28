import axios from "axios"
import Layout from "components/Layouts/Layout"
import { HeroSection } from "components/UI/HeroSection"
import { Posts } from "components/UI/Posts"
import Videos from "components/UI/Videos"
import type { NextPage } from "next"
import Head from "next/head"

type Props = {
  videos?: any[]
}

const Home: NextPage = ({ videos }: Props) => {
  return (
    <div>
      <Head>
        <title>Backstage Features by Gracie Lowes | Home</title>
        <meta
          name='description'
          content='Backstage Features by Gracie Lowes. Interviews, coverages, people, get backstage info about your favorite celeb!'
        />
      </Head>

      <Layout>
        <HeroSection />
        <Posts />
        <Videos videos={videos} />
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=PLGm4HIhsHl1EMUN035h9P2WQG9MTHFZio&key=${process.env.NEXT_PUBLIC_API_KEY}`
  )
  return {
    props: { videos: data.items },
  }
}

export default Home
