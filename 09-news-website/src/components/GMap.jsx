import React from "react";

function GMap({ src }) {
    return (
        <div className="w-full h-64 lg:h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
                src={src}
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </div>
    );
}

export default GMap;
