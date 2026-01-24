import React, { useEffect, useRef, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";

export default function AllPosts({ posts }) {
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRef = useRef(null);

    const handleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    // 🔥 close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="p-4 bg-white rounded-lg shadow overflow-x-auto">
            <h2 className="text-xl font-semibold mb-4">All Posts</h2>

            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium">No</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Title</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Date</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">
                        Feature Image
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Tag</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">
                        Category
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Action</th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                {posts.map((post, index) => (
                    <tr key={post.id}>
                        <td className="px-4 py-2 text-sm">{index + 1}</td>
                        <td className="px-4 py-2 text-sm">{post.title}</td>
                        <td className="px-4 py-2 text-sm">{post.date}</td>
                        <td className="px-4 py-2">
                            <img
                                src={post.featureImg}
                                alt={post.title}
                                className="w-16 h-16 rounded object-cover"
                            />
                        </td>
                        <td className="px-4 py-2 text-sm">{post.tag}</td>
                        <td className="px-4 py-2 text-sm">{post.category}</td>

                        <td className="px-4 py-2 relative">
                            <button
                                onClick={() => handleDropdown(post.id)}
                                className="p-2 rounded hover:bg-gray-200"
                            >
                                <FiMoreVertical />
                            </button>

                            {openDropdown === post.id && (
                                <div
                                    ref={dropdownRef}
                                    className="absolute right-0 mt-2 w-28 bg-white border rounded shadow z-50"
                                >
                                    <button
                                        onClick={() => setOpenDropdown(null)}
                                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => setOpenDropdown(null)}
                                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
