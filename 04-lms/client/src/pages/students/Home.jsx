import React from 'react';
import Hero from "../../components/students/Hero.jsx";
import Companies from "../../components/students/Companies.jsx";
import CourseSection from "../../components/students/CourseSection.jsx";
import TestimonialSection from "../../components/students/TestimonialSection.jsx";
import CallToAction from "../../components/students/CallToAction.jsx";
import Footer from "../../components/students/Footer.jsx";

function Home(props) {
    return (
        <div className="flex flex-col items-center text-center space-y-7">
            <Hero/>
            <Companies/>
            <CourseSection/>
            <TestimonialSection/>
            <CallToAction/>
            <Footer/>
        </div>
    );
}

export default Home;