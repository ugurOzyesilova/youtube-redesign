import React from 'react'
import VideoCard from './VideoCard'
import Premium from "../images/premium.png"
import { useLocation } from "react-router-dom";

const Videos = ({ videos}) => {

  console.log(videos)
  
  const location = useLocation();

  let className = "videos";
  if (location.pathname.includes("search")) {
    className += " search__feed";
  }

  return (
    <>    
      {!location.pathname.includes("search") && (
        <div className="videos__banner">
          <img src={Premium} alt="" />
          <div>
            <h3>Google Play Music is no longer available. Try YouTube Music.</h3>
            <p>You can still transfer your library, including playlists and uploads, to Youtube Music. </p>
            <button>Start Now</button>
          </div>
        </div>
      )}
      <div className={className}>
        {videos.map((video, idx) => (
          <div className="video" key={idx}>
            {video.id.videoId && <VideoCard video={video} />}
          </div>
        ))}
      </div>
    </>

  )
}

export default Videos