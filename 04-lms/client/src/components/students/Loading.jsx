import React from 'react';

function Loading(props) {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-16 sm:w-20 aspect-square border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin"></div>
        </div>
    );
}

export default Loading;