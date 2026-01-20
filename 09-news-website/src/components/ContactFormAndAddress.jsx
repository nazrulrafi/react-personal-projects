import React from 'react';


function ContactFormAndAddress() {
    return (
        <div className="max-w-[1450px] px-10 mx-auto mt-[50px]">
            <div className=" px-6 py-16">
                <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Side - Address / Info */}
                    <div className="lg:w-1/2 bg-gray-100 p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-6">Our Address</h2>
                        <p className="mb-4">
                            <span className="font-semibold">Company:</span> Example Corp
                        </p>
                        <p className="mb-4">
                            <span className="font-semibold">Address:</span> 123 Main Street, Dhaka, Bangladesh
                        </p>
                        <p className="mb-4">
                            <span className="font-semibold">Phone:</span> +880 1234 567890
                        </p>
                        <p className="mb-4">
                            <span className="font-semibold">Email:</span> contact@example.com
                        </p>

                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                            <div className='flex items-center gap-3 mt-4'>
                                {/* Instagram */}
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z"/>
                                </svg>
                                {/* Facebook */}
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z"/>
                                </svg>
                                {/* Twitter */}
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z"/>
                                </svg>
                                {/* LinkedIn */}
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                        <form className="flex flex-col gap-4">
                            <div>
                                <label className="block mb-1 font-medium">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Your Message"
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="mt-2 bg-blue-500 text-white font-semibold px-6 py-2 rounded hover:bg-blue-600 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default ContactFormAndAddress;