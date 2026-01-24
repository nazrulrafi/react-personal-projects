import React from "react";


export default function AboutCom({aboutData}) {
    return (
        <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-6">About Page (Admin)</h2>

            {/* Title */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                    type="text"
                    value={aboutData.title}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                    readOnly
                />
            </div>

            {/* Short Description */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                    Short Description
                </label>
                <textarea
                    rows="2"
                    value={aboutData.shortDescription}
                    className="w-full border rounded px-3 py-2"
                    readOnly
                />
            </div>

            {/* Long Description */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                    Long Description
                </label>
                <textarea
                    rows="5"
                    value={aboutData.longDescription}
                    className="w-full border rounded px-3 py-2"
                    readOnly
                />
            </div>

            {/* Features */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Key Features</label>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {aboutData.features.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Image */}
            <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                    Featured Image
                </label>
                <img
                    src={aboutData.image}
                    alt="About"
                    className="w-64 h-40 object-cover rounded border"
                />
            </div>

            {/* Actions */}
            <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Edit
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                    Cancel
                </button>
            </div>
        </div>
    );
}
