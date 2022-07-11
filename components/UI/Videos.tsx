import Loading from "components/Loading"
import Section from "components/Section"
import Video from "./Video"

const Videos = ({ videos }: { videos?: any[] }) => {
  console.log("vids", videos)
  return (
    <Section
      title='Recent Videos'
      subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A leo arcusapien lobortis. Sed lacus sapien pulvinar.'
      btnText='View All'
      btnLink='/videos'
    >
      {!videos && <Loading />}
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {videos &&
          videos
            .reverse()
            .slice(0, 4)
            .map((video: any) => (
              <Video
                videoId={video.contentDetails.videoId}
                key={video.contentDetails.videoId}
              />
            ))}
      </div>
    </Section>
  )
}

export default Videos
