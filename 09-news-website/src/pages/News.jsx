import React from 'react';
import postAddHorizontal from "../assets/post-ad-horizontal.jpg"
import postAddVertical from "../assets/post-ad-verticaL.jpg"

import BreadCrumb from "../components/BreadCrumb.jsx";
import {getPathName} from "../utils/helpers.js";
import {Link, useLoaderData, useLocation} from "react-router-dom";
import NewsFirst from "../components/NewsFirst.jsx";
import RestNews from "../components/RestNews.jsx";

function News(props) {
    const {firstThree,restNews} = useLoaderData();
    const title = getPathName()
    const categories = [
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology"
    ]
    return (
        <>
            <BreadCrumb title={title}/>
            <div className="max-w-[1450px] mt-10 px-10 mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div className="w-full lg:w-[70%]">
                    <NewsFirst firstThree={firstThree}/>
                    <img src={postAddHorizontal} alt="" className="w-full mt-8"/>
                    <RestNews restNews={restNews}/>
                </div>
                <div className="w-full lg:w-[30%]">
                    <img src={postAddVertical} alt="" className="w-full mt-8 rounded-lg shadow-md"/>

                    <div className="mt-10">
                        <h3 className="text-xl font-semibold mb-4">Categories</h3>
                        <ul className="flex flex-col gap-2">
                            {categories.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={`/category/${item}`}
                                        className="block px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors"
                                    >
                                        {item.charAt(0).toUpperCase() + item.slice(1)} {/* Capitalize first letter */}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
}

export default News;