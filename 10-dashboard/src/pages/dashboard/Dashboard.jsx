import React from 'react';
import { BiCopyAlt, BiShoppingBag, BiUser } from "react-icons/bi";

import WelcomeCard from "../../components/dashboard/WelcomeCard.jsx";
import MonthlyEarning from "../../components/dashboard/MonthlyEarning.jsx";
import SocialSource from "../../components/dashboard/SocialSource.jsx";
import MiniStatsCard from "../../components/dashboard/MiniStatsCard.jsx";
import VerticalBarChart from "../../components/dashboard/VerticalBarChart.jsx";

function Dashboard(props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 bg-[#F8F8FB] p-8">
            <div className="col-span-1">
                <WelcomeCard/>
                <MonthlyEarning/>
                <SocialSource/>
            </div>
            <div className="col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <MiniStatsCard
                        title="Orders"
                        value="1,235"
                        icon={BiCopyAlt}
                        color="#2563EB" // Tailwind blue-600
                    />
                    <MiniStatsCard
                        title="Revenue"
                        value="$12,345"
                        icon={BiShoppingBag}
                        color="#16A34A" // Tailwind green-600
                    />
                    <MiniStatsCard
                        title="Customers"
                        value="567"
                        icon={BiUser}
                        color="#7C3AED" // Tailwind purple-600
                    />
                </div>
                <VerticalBarChart/>
            </div>
        </div>
    );
}

export default Dashboard;