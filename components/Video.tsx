import React from "react";

interface Props {
  videoId: string;
}

const Video = (props: Props) => {
  return (
    <iframe
      className="w-full h-96 md:h-[28em]"
      src={`https://www.youtube.com/embed/${props.videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default Video;
