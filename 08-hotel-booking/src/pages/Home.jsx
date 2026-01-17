import React from 'react';
import Hero from "../components/Hero.jsx";
import FeatureDestination from "../components/FeatureDestination.jsx";
import ExclusiveOffer from "../components/ExclusiveOffer.jsx";
import Testimonials from "../components/Testimonials.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import Footer from "../components/Footer.jsx";

function Home(props) {
    return (
        <>
            <Hero/>
            <FeatureDestination/>
            <ExclusiveOffer/>
            <Testimonials/>
            <NewsLetter/>
        </>
    );
}

export default Home;