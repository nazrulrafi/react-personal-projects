import React from 'react';
import ContactMessages from "../../../components/contact/ContactMessage.jsx";
import {contactMessages} from "../../../data/contactMessages.js";

function Contact(props) {
    return (
        <ContactMessages messages={contactMessages} />
    );
}

export default Contact;