import React from "react";

export default function AddNewPost() {
    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6">Add New Post</h2>

            <form className="space-y-5">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                        placeholder="Enter post title"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Description
                    </label>
                    <textarea
                        rows="4"
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                        placeholder="Post description..."
                    />
                </div>

                {/* Feature Image */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Feature Image
                    </label>
                    <input
                        type="file"
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                {/* Tag Select */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Tag
                    </label>
                    <select className="w-full border rounded px-3 py-2">
                        <option>Select tag</option>
                        <option>React</option>
                        <option>Next.js</option>
                        <option>JavaScript</option>
                        <option>CSS</option>
                    </select>
                </div>

                {/* Category Checkbox */}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Category
                    </label>

                    <div className="flex flex-wrap gap-4">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            <span className="text-sm">Frontend</span>
                        </label>

                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            <span className="text-sm">Backend</span>
                        </label>

                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            <span className="text-sm">Design</span>
                        </label>

                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            <span className="text-sm">Programming</span>
                        </label>
                    </div>
                </div>

                {/* Button */}
                <button
                    type="button"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                    Add Post
                </button>
            </form>
        </div>
    );
}
