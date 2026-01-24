import React from "react";

export default function MiniStatsCard({ title, value, icon: Icon, color = "#2563EB" }) {
    return (
        <div className="rounded-lg bg-white shadow p-4">
            <div className="flex items-center">
                {/* Text */}
                <div className="flex-1">
                    <p className="text-sm text-gray-500 font-medium">{title}</p>
                    <h4 className="text-xl font-semibold mb-0">{value}</h4>
                </div>

                {/* Icon */}
                <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-white text-2xl"
                    style={{ backgroundColor: color }}
                >
                    <Icon />
                </div>
            </div>
        </div>
    );
}
