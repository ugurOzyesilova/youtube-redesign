import React, { useState, useEffect, useContext} from 'react'
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"

import { fetchAPI } from "../utils/API"
import { VscVerified } from "react-icons/vsc"
import { Context } from "../context-api/Context";
import { AiOutlineLike} from "react-icons/ai";



const VideoDetail = () => {

    const { id } = useParams();
    const [similarVideos, setSimilarVideos] = useState([]);
    const [videoDetail, setVideoDetail] = useState(null);
    const { likeVideo, likedVideos, unLikeVideo } = useContext(Context);

    useEffect(() => {
        fetchAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]))

        fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setSimilarVideos(data.items))
    }, [id]);

    console.log(similarVideos)

    

    

    const firedFunctions = () => {
        const likedVideo = likedVideos.find(video => video.id === videoDetail.id);
        if (likedVideo) {
            unLikeVideo(videoDetail.id);
        } else {
            likeVideo(videoDetail);
        }

        console.log(likedVideos)
    }

    const color = likedVideos.find(video => video.id === videoDetail.id) ? "red" : "white";
  
    return (
        <div className='video__detail'>
            <div className='video__detail__video'>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${id}`}
                    className="react-player"
                    height="65vh"
                    width="62.6vw"
                    controls />
                <div className='video__detail__content'>
                    <h3>{videoDetail?.snippet?.title}</h3>
                    <span>{videoDetail?.snippet?.channelTitle}  <VscVerified className='verified__icon' /></span>
                    <div>
                            <span>Views: {videoDetail?.statistics?.viewCount}</span>
                            <AiOutlineLike onClick={firedFunctions} style={{ color: color }} />
                    </div>
                </div>
            </div>

            <ul>
                {similarVideos.map((video) => <div>
                    <Link to={`/video/${video.id.videoId}`} style={{ textDecoration: 'none' }}>
                        <img src={video?.snippet?.thumbnails?.high.url} alt="" />
                        <p>{video?.snippet?.title.slice(0, 40)}</p>
                    </Link>
                    <Link to={`/video/${video.id.videoId}`} style={{ textDecoration: 'none' }}>
                        <p className='similar__videos__video__detail'>{video?.snippet?.channelTitle} <VscVerified className='verified__icon' /></p>
                    </Link>


                </div>)}
            </ul>
        </div>
    )
}

export default VideoDetail