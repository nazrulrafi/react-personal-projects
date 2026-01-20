import React, {useState} from 'react';
import RestNewsCard from "./RestNewsCard.jsx";

function RestNews({restNews}) {
    const [visibleCount, setVisibleCount] = useState(10);
    const visibleNews = restNews.slice(0, visibleCount);
        function handleLoadMore(){
            setVisibleCount(prev => prev + 10);
        }
    return (
        <div>
            {visibleNews.map((item, index) => (
                <RestNewsCard key={index} post={item} index={index + 3} />
            ))}
            {visibleCount < restNews.length && (
                <div className="text-center mt-4">
                    <button
                        onClick={handleLoadMore}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}

export default RestNews;