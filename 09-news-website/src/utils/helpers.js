import {useLocation} from "react-router-dom";

export function formatDate(date) {
    const toDate = new Date(date);
    const formatted = toDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long", // full month name
        day: "numeric"
    });

    return formatted;
}

export function getPathName(){
    const location = useLocation();
    const path = location.pathname.replace("/","")
    const title = path.charAt(0).toUpperCase() + path.slice(1);
    return title;
}


export function getCatName() {
    const location = useLocation();

    // Split by "/" and get the last non-empty segment
    const segments = location.pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1] || "";

    // Capitalize first letter
    const title = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
    return title;
}