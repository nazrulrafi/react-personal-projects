import React from 'react';
import welcomeCardImg from '../../assets/welcome-card-img.jpg';
import welcomeCardBgImg from '../../assets/welcome-card-bg-img.png';

function WelcomeCard(props) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow">
            {/* Top Section */}
            <div className="bg-blue-50">
                <div className="grid grid-cols-12">
                    {/* Left */}
                    <div className="col-span-7">
                        <div className="p-4 text-blue-600">
                            <h5 className="text-lg font-semibold">Welcome Back !</h5>
                            <p className="text-sm text-blue-500">Skote Dashboard</p>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="col-span-5 flex items-end justify-end p-2">
                        <img src={welcomeCardBgImg} alt="" className="max-w-full"/>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="p-4 pt-0">
                <div className="grid grid-cols-12 gap-4">
                    {/* Profile */}
                    <div className="col-span-12 sm:col-span-4">
                        <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border">
                            <img
                                src={welcomeCardImg}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <h5 className="truncate text-sm font-semibold">Henry Price</h5>
                        <p className="truncate text-sm text-gray-500">UI/UX Designer</p>
                    </div>

                    {/* Stats */}
                    <div className="col-span-12 sm:col-span-8">
                        <div className="pt-4">
                            <div className="grid grid-cols-2">
                                <div>
                                    <h5 className="text-sm font-semibold">125</h5>
                                    <p className="text-sm text-gray-500">Projects</p>
                                </div>

                                <div>
                                    <h5 className="text-sm font-semibold">$1245</h5>
                                    <p className="text-sm text-gray-500">Revenue</p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <a
                                    href="/dashboard"
                                    className="inline-flex items-center rounded bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700"
                                >
                                    View Profile
                                    <span className="ml-1">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default WelcomeCard;