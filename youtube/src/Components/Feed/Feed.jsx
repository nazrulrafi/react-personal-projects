import React, {useEffect, useState} from 'react';
import "./Feed.css";
import thumbnail01 from "../../assets/thumbnail1.png";
import thumbnail02 from "../../assets/thumbnail2.png";
import thumbnail03 from "../../assets/thumbnail3.png";
import thumbnail04 from "../../assets/thumbnail4.png";
import thumbnail05 from "../../assets/thumbnail5.png";
import thumbnail06 from "../../assets/thumbnail6.png";
import thumbnail07 from "../../assets/thumbnail7.png";
import thumbnail08 from "../../assets/thumbnail8.png";
import {Link} from "react-router-dom";
import {API_KEY, valueConverter} from "../../data.js";
import moment from "moment";

function Feed({category}) {
    const [data,setData] = useState([])
    const fetchData = async () => {
        const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=500&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        try {
            const response = await fetch(videoList_url);
            const json = await response.json();
            setData(json.items || []); // Safe fallback
        } catch (err) {
            console.error("Failed to fetch videos:", err);
        }
    };


    useEffect(() => {
        fetchData()
    },[category])
    return (
        <div className="feed">
            {data.map((item,index)=>{
                return (
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                        <img src={item.snippet.thumbnails.medium.url} alt=""/>
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>
                )
            })}


        </div>
    );
}

export default Feed;