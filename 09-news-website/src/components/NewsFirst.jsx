import React from 'react';
import {formatDate} from "../utils/helpers.js";
import {Link} from "react-router-dom";

function NewsFirst({firstThree}) {
    return (
        <div className="flex flex-col  gap-6 lg:gap-10">
            {/* Left column - main news */}
            <div className="w-full">
                <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden">
                    <img
                        src={firstThree[0].urlToImage}
                        alt={firstThree[0].title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                        <div className="flex gap-3 mb-2 flex-wrap items-center">
                                <span className="bg-amber-500 text-white px-3 py-1 rounded">
                                  {firstThree[0].author || "Unknown"}
                                </span>
                            <span className="text-[16px] text-white">
                                  {formatDate(firstThree[0].publishedAt)}
                                </span>
                        </div>
                        <Link to={`/news/0`}>
                            <h2 className="text-[28px] lg:text-[32px] text-white font-bold">
                                {firstThree[0].title}
                            </h2>
                        </Link>

                    </div>
                </div>
            </div>

            {/* Right column - two smaller news */}
            <div className="w-full flex flex-row gap-6">
                {[1, 2].map((i) => (
                    <div key={i} className="relative w-full h-48 lg:h-[240px] rounded-lg overflow-hidden">
                        <img
                            src={firstThree[i].urlToImage}
                            alt={firstThree[i].title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-3">
                            <div className="flex gap-2 mb-1 flex-wrap items-center">
                                  <span className="bg-indigo-500 text-[14px] text-white px-2 py-1 rounded">
                                    {firstThree[i].author || "Unknown"}
                                  </span>
                                <span className="text-[14px] text-white">
                                    {formatDate(firstThree[i].publishedAt)}
                                  </span>
                            </div>
                            <Link to={`/news/${i}`}>
                                <h3 className="text-[16px] lg:text-[18px] text-white font-bold">
                                    {firstThree[i].title}
                                </h3>
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewsFirst;