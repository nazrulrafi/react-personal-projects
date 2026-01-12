import React, {useEffect, useState} from 'react';
import "./Recommended.css";
import {API_KEY, valueConverter} from "../../data.js";
import {Link} from "react-router-dom";
function Recommended({categoryId}) {
    const [apiData,setApiData] = useState([])

    const fetchVideoData = async () => {
        const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=45&videoCategoryId=${categoryId}&key=${API_KEY}`;
        try {
            const response = await fetch(videoList_url);
            const json = await response.json();
            setApiData(json.items); // Safe fallback
        } catch (err) {
            console.error("Failed to fetch videos:", err);
        }
    };

    useEffect(() => {
        fetchVideoData()
    },[])
    return (
        <div className="recommended">
            {apiData.map((item,index)=>{
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                        <img src={item.snippet.thumbnails.medium.url} alt=""/>
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{valueConverter(item.statistics.viewCount)} Views</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}

export default Recommended;