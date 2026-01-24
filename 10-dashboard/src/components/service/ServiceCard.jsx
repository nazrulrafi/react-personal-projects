import React from "react";

export default function ServiceCard({ service }) {
    return (
        <div className="bg-white shadow rounded-lg p-4 flex flex-col md:flex-row gap-4 items-center">
            {/* Icon */}
            <div className="text-4xl">{service.icon}</div>

            {/* Content */}
            <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                <p className="text-gray-600 mb-2">{service.description}</p>
                <span className="text-sm text-gray-500">{service.category}</span>
            </div>

            {/* Image */}
            <img
                src={service.image}
                alt={service.title}
                className="w-32 h-20 object-cover rounded"
            />

            {/* Actions */}
            <div className="flex flex-col gap-2 ml-4">
                <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                    Edit
                </button>
                <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm">
                    Delete
                </button>
            </div>
        </div>
    );
}
