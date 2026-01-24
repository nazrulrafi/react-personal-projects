import React, { useState } from "react";

export default function ContactMessages({ messages }) {
    const [selectedMessage, setSelectedMessage] = useState(null);

    return (
        <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Contact Messages</h2>

            {/* TABLE */}
            <div className="overflow-x-auto">
                <table className="min-w-full border divide-y">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left text-sm">No</th>
                        <th className="px-4 py-2 text-left text-sm">Name</th>
                        <th className="px-4 py-2 text-left text-sm">Email</th>
                        <th className="px-4 py-2 text-left text-sm">Subject</th>
                        <th className="px-4 py-2 text-left text-sm">Date</th>
                        <th className="px-4 py-2 text-left text-sm">Status</th>
                        <th className="px-4 py-2 text-left text-sm">Action</th>
                    </tr>
                    </thead>

                    <tbody className="divide-y">
                    {messages.map((msg, index) => (
                        <tr key={msg.id}>
                            <td className="px-4 py-2">{index + 1}</td>
                            <td className="px-4 py-2">{msg.name}</td>
                            <td className="px-4 py-2">{msg.email}</td>
                            <td className="px-4 py-2">{msg.subject}</td>
                            <td className="px-4 py-2">{msg.date}</td>
                            <td className="px-4 py-2">
                  <span
                      className={`px-2 py-1 text-xs rounded-full ${
                          msg.status === "new"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-green-100 text-green-600"
                      }`}
                  >
                    {msg.status}
                  </span>
                            </td>
                            <td className="px-4 py-2">
                                <button
                                    onClick={() => setSelectedMessage(msg)}
                                    className="text-blue-600 hover:underline text-sm"
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* MODAL */}
            {selectedMessage && (
                <div className="fixed inset-0 bg-[#00000070] flex items-center justify-center z-999999">
                    <div className="bg-white w-full max-w-lg rounded-lg shadow p-6 relative">
                        <h3 className="text-lg font-semibold mb-2">
                            {selectedMessage.subject}
                        </h3>

                        <p className="text-sm text-gray-600 mb-1">
                            <strong>Name:</strong> {selectedMessage.name}
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                            <strong>Email:</strong> {selectedMessage.email}
                        </p>

                        <p className="text-gray-700 mb-6">
                            {selectedMessage.message}
                        </p>

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setSelectedMessage(null)}
                                className="px-4 py-2 text-sm rounded bg-gray-200 hover:bg-gray-300"
                            >
                                Close
                            </button>
                            <button className="px-4 py-2 text-sm rounded bg-red-600 text-white hover:bg-red-700">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
