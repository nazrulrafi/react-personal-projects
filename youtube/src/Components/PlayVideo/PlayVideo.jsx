import React, {useEffect, useState} from 'react';
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import {API_KEY, valueConverter} from "../../data.js";
import moment from "moment";
import {useParams} from "react-router-dom";


function PlayVideo() {
    const {videoId} = useParams();
    const [apiData,setApiData] = useState(null)
    const [channelData,setChannelData] = useState(null)
    const [commentData,setCommentData] = useState([]);

    const fetchVideoData = async () => {
        const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
        try {
            const response = await fetch(videoList_url);
            const json = await response.json();
            setApiData(json.items[0] || []); // Safe fallback
        } catch (err) {
            console.error("Failed to fetch videos:", err);
        }
    };

    const fetchOtherData = async () => {
        const channelData_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;

        try {
            const response = await fetch(channelData_url);
            const json = await response.json();
            setChannelData(json.items[0]); // Safe fallback
        } catch (err) {
            console.error("Failed to fetch videos:", err);
        }
    }
    const fetchVideoComments = async ()=>{
        const comment_url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        try {
            const response = await fetch(comment_url);
            const json = await response.json();
            setCommentData(json.items); // Safe fallback
        } catch (err) {
            console.error("Failed to fetch videos:", err);
        }
    }
    useEffect(() => {
        fetchVideoData()
    },[videoId])
    useEffect(() => {
        fetchOtherData()
        fetchVideoComments()
    },[apiData])

    return (
        <div className="play-video">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h3>{apiData ? apiData.snippet.title : "Loading..."}</h3>

            <div className="play-video-info">
            <p>
                {apiData ? valueConverter(apiData.statistics.viewCount) : "16K"} views &bull;
                {apiData ? moment(apiData.snippet.publishedAt).fromNow() :""}</p>
                <div>
                    <span><img src={like}/>{apiData?valueConverter(apiData.statistics.likeCount):"0"}</span>
                    <span><img src={dislike}/>2</span>
                    <span><img src={share}/>Share</span>
                    <span><img src={save}/>Save</span>
                </div>
            </div>
            <hr/>
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url:""} alt=""/>
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle :""}</p>
                    <span>{channelData?valueConverter(channelData.statistics.subscriberCount):"0"} subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                {apiData ? apiData.snippet.description.slice(0,1000) :""}
                <hr/>
                <h4>{apiData?valueConverter(apiData.statistics.commentCount):102} Comments</h4>
                {commentData.map((item,index)=>{
                    return (
                        <div className="comment" key={index}>
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=""/>
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div className="comment-action">
                                    <img src={like} alt=""/>
                                    <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                                    <img src={dislike} alt=""/>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default PlayVideo;