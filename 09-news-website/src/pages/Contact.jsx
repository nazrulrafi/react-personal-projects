import React from 'react';
import ContactFormAndAddress from "../components/ContactFormAndAddress.jsx";
import GMap from "../components/GMap.jsx";

function Contact(props) {
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.924442312973!2d90.3870013154303!3d23.75090359460248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8595f3d3f0f%3A0x2b71f1f79a61f6d1!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1703091234567!5m2!1sen!2sus";
    return (
        <>
            <ContactFormAndAddress/>
            <GMap src={mapSrc} />
        </>
    );
}

export default Contact;