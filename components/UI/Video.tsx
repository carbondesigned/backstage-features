import { Line } from "components/Misc/Line"

interface Props {
  videoId: string
}

const Video = (props: Props) => {
  return (
    <>
      {props.videoId && (
        <div className='rounded-xl overflow-hidden relative p-12 border-[2px] post bg-base-200 border-opacity-30 hover:border-opacity-0 border-neutral-content post-border'>
          {/* brand style around post (lines) */}
          <div className='line absolute top-0 -left-10 z-50'>
            <Line line='purple-thick' />
          </div>
          <div className='line absolute top-48 -right-10'>
            <Line line='yellow-thick' />
          </div>
          <div className='line absolute top-24 -right-10'>
            <Line line='blue-sm' />
          </div>
          <div className='line absolute bottom-10 -left-10 z-0'>
            <Line line='red-md' />
          </div>
          <iframe
            className='w-full rounded-xl border-gradient z-40 relative h-full aspect-video'
            src={`https://www.youtube.com/embed/${props.videoId}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  )
}

export default Video
