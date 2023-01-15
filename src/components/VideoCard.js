import React from 'react'
import { Link } from "react-router-dom"
import { VscVerified } from "react-icons/vsc"

const VideoCard = ({ video }) => {

  //console.log(video)
  const videoId = video.id.videoId;
  const snippet = video.snippet;

  return (
    <div className='video__card'>
      <div>
        <Link to={videoId ? `/video/${videoId}` : <span>Video access denied</span>} style={{ textDecoration: 'none' }}>
          <img src={snippet?.thumbnails?.high.url} alt={snippet?.title} />
          <p>{snippet?.title.slice(0, 40)}</p>
        </Link>
        <Link to={videoId ? `/video/${videoId}` : <span>Video access denied</span>} style={{ textDecoration: 'none' }}>
          <p>{snippet?.channelTitle} <VscVerified className='verified__icon' /></p>
        </Link>
      </div>
    </div>
  )
}

export default VideoCard