import React from 'react';
import PostCard from "./PostCard.jsx";

function RecentPosts({recentNews}) {
console.log(recentNews);
    return (
        <div className="max-w-[1450px] px-10 mx-auto my-[80px] ">
            <h2 className="text-[30px] font-[600] mb-4">Recent Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
                {recentNews.map((post, index) => (

                    <PostCard key={index} post={post} index={index + 3} />
                ))}
            </div>
        </div>
    );
}

export default RecentPosts;