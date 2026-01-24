import React from 'react';
import MonthlyEarningRadialChart from "./MonthlyEarningRadialChart.jsx";

function MonthlyEarning(props) {
    return (
        <div className="rounded-lg bg-white shadow mt-7">
            <div className="p-6">
                {/* Title */}
                <h4 className="mb-4 text-base font-semibold text-gray-700">
                    Monthly Earning
                </h4>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Left Content */}
                    <div>
                        <p className="text-sm text-gray-500">This month</p>

                        <h3 className="mt-1 text-2xl font-bold text-gray-900">
                            $34,252
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
          <span className="mr-2 inline-flex items-center text-green-600 font-semibold">
            12%
            <span className="ml-1">↑</span>
          </span>
                            From previous period
                        </p>

                        <div className="mt-4">
                            <a
                                href="/dashboard"
                                className="inline-flex items-center rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                            >
                                View More
                                <span className="ml-1">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Chart */}
                    <div className="flex items-center justify-center sm:justify-end">
                        {/* ApexChart / Chart Component goes here */}
                        <div className="h-[160px] w-full max-w-[200px]">
                           <MonthlyEarningRadialChart/>
                        </div>
                    </div>
                </div>

                {/* Footer Text */}
                <p className="mt-6 text-sm text-gray-500">
                    We craft digital, graphic and dimensional thinking.
                </p>
            </div>
        </div>

    );
}

export default MonthlyEarning;