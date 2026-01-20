import React from 'react';
import { formatDate } from "../utils/helpers.js";
import { Link } from "react-router-dom";

function RestNewsCard({ post, index }) {
    const [visible, setVisible] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const divRef = React.useRef(null);

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="relative my-8 rounded-xl p-0.5 bg-white backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer"
        >
            {visible && (
                <div
                    className="pointer-events-none blur-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 size-60 absolute z-0 transition-opacity duration-300"
                    style={{ top: position.y - 120, left: position.x - 120 }}
                />
            )}

            <div className="relative z-10 bg-white p-6 h-full w-full rounded-[10px] flex flex-col lg:flex-row gap-6 lg:gap-7">
                {/* Image */}
                <div className="w-full lg:w-[35%]">
                    <img src={post.urlToImage} alt={post.title} className="w-full rounded-lg object-cover" />
                </div>

                {/* Content */}
                <div className="w-full lg:w-[65%] flex flex-col justify-between">
                    <div>
                        <div className="flex gap-3 mb-2 flex-wrap items-center">
              <span className="bg-amber-500 text-white px-3 py-1 rounded text-sm">
                {post.author || "Unknown"}
              </span>
                            <span className="text-[14px] text-gray-500">{formatDate(post.publishedAt)}</span>
                        </div>
                        <h2 className="mb-2 text-[20px] lg:text-[21px] font-bold tracking-tight text-gray-900 hover:underline">
                            {post.title}
                        </h2>
                        <p className="mb-3 font-mal text-gray-700 text-sm lg:text-base">{post.description}</p>
                    </div>

                    <Link
                        to={`/news/${index}`}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 mt-4 lg:mt-auto w-fit"
                    >
                        Read more
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RestNewsCard;
