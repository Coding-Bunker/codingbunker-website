"use client"
import React from "react"
import ReactPlayer from "react-player"

interface VideoPlayerProps {
  className?: string
  src?: string
  width?: string
  height?: string
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  width = "100%",
  height = "400px",
  className,
}) => {
  return (
    <div className={className}>
      <ReactPlayer
        width={width}
        height={height}
        url={src}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={src} type="video/mp4" />
    </div>
  )
}

export default VideoPlayer
