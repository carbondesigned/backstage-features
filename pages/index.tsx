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

      <main className='min-h-screen bg-neutral p-6 lg:p-32'>
        <HeroSection />
        <Posts />
      </main>
    </div>
  )
}

export default Home
