import React, {useEffect} from 'react';
import Hero from "../components/Hero.jsx";
import {getAllNews} from "../utils/newsApi.js";
import {useLoaderData} from "react-router-dom";
import RecentPosts from "../components/RecentPosts.jsx";
import Footer from "../components/Footer.jsx";

function Home(props) {
    const {allNews,threeNews,recentNews} =useLoaderData()
    console.log(recentNews)
    return (
        <>
            <Hero threeNews={threeNews}/>
            <RecentPosts recentNews={recentNews}/>

        </>
    );
}

export default Home;


