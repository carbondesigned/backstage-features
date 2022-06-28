import Layout from "components/Layouts/Layout"
import { HeroSection } from "components/UI/HeroSection"
import { Posts } from "components/UI/Posts"
import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Backstage Features by Gracie Lowes | Home</title>
        <meta
          name='description'
          content='Backstage Features by Gracie Lowes. Interviews, coverages, people, get backstage info about your favorite celeb!'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <HeroSection />
        <Posts />
      </Layout>
    </div>
  )
}

export default Home
