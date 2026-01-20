import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

function NewsDetails() {
    const news = useLoaderData(); // single news object
    const navigate = useNavigate();

    return (
        <div className="max-w-4xl mx-auto p-6 mt-[100px]">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 px-4 py-2 bg-indigo-500 text-white rounded cursor-pointer"
            >
                ← Back
            </button>

            <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
            <p className="text-gray-600 mb-2">
                {news.author || "Unknown"} | {new Date(news.publishedAt).toLocaleDateString()}
            </p>

            {news.urlToImage && (
                <img src={news.urlToImage} alt={news.title} className="w-full rounded-lg mb-4"/>
            )}
            <h5 className="text-xl font-bold">Content:</h5>
            <div
                className="text-lg"
                dangerouslySetInnerHTML={{__html: news.content}}
            />
            <h5 className="text-xl font-bold mt-4">Description:</h5>
            <div
                className="text-lg"
                dangerouslySetInnerHTML={{__html: news.description}}
            />
            <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 mt-4 inline-block"
            >
                Read Full Article
            </a>
        </div>
    );
}

export default NewsDetails;
