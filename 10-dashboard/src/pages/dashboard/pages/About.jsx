import React from "react";
import { aboutData } from "../../../data/aboutData.js";
import AboutCom from "../../../components/about/AboutCom.jsx";

export default function About() {
    return (
        <AboutCom aboutData={aboutData} />
    );
}
