"use client"

import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const VideoBg = ({ videoSrc }) => {
  return (
    <div>
      <ReactPlayer
        url={videoSrc}
        playing={true}
        playsinline
        aspectRatio="16:9"
        loop={true}
        muted={true}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
};

export default VideoBg;
