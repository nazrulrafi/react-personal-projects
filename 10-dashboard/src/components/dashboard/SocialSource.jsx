import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function SocialSource() {
    return (
        <div className="rounded-lg bg-white shadow mt-8">
            <div className="p-6">
                {/* Title */}
                <h4 className="mb-4 text-base font-semibold text-gray-700">
                    Social Source
                </h4>

                {/* Main Social */}
                <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-600">
                        <FaFacebookF />
                    </div>

                    <h5 className="mb-2 text-lg font-semibold text-gray-900">
                        <a href="/dashboard" className="hover:underline">
                            Facebook - <span className="text-gray-500 font-normal">125 sales</span>
                        </a>
                    </h5>

                    <p className="mb-2 text-sm text-gray-500">
                        Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.
                    </p>

                    <a href="/dashboard" className="inline-flex items-center text-blue-600 text-sm font-medium hover:underline">
                        Learn more <span className="ml-1">→</span>
                    </a>
                </div>

                {/* Social Stats */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                    {/* Facebook */}
                    <div className="text-center">
                        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white text-base">
                            <FaFacebookF />
                        </div>
                        <h5 className="text-sm font-semibold">Facebook</h5>
                        <p className="text-sm text-gray-500 mb-0">125 sales</p>
                    </div>

                    {/* Twitter */}
                    <div className="text-center">
                        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-sky-400 text-white text-base">
                            <FaTwitter />
                        </div>
                        <h5 className="text-sm font-semibold">Twitter</h5>
                        <p className="text-sm text-gray-500 mb-0">112 sales</p>
                    </div>

                    {/* Instagram */}
                    <div className="text-center">
                        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white text-base">
                            <FaInstagram />
                        </div>
                        <h5 className="text-sm font-semibold">Instagram</h5>
                        <p className="text-sm text-gray-500 mb-0">104 sales</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
