import React, {useState} from 'react';
import { motion } from "motion/react"
import Title from "./Title.jsx";
import assets from "../assets/assets.js";
import toast from "react-hot-toast";

function ContactUs(props) {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "9551a522-3a58-4013-89c1-9d5a267bee37");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                toast.success("Thanks you for your submission!");
                event.target.reset();
            }else {
                toast.error(data.message);
            }
        }catch (error) {
            toast.error(error.message);
        }
    };
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            transition={{staggerChildren:0.2}}
            id="contact-us" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
            <Title title="Reach out to us"description="From strategy to execution, we craft digital solutions that move your
            business forward."/>

            <motion.form
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.5,delay:0.4}}
                viewport={{once:true}}
                className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full" onSubmit={onSubmit}>
                <div>
                    <p className="mb-2 text-sm font-medium">Your name</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img alt="" src={assets.person_icon}/>
                        <input placeholder="Enter your name" className="w-full p-3 text-sm outline-none" required=""
                        type="text" name="name"/>
                    </div>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium">Email id</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img alt="" src={assets.email_icon}/>
                        <input placeholder="Enter your email" className="w-full p-3 text-sm outline-none" required=""
                        type="email" name="email"/>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <p className="mb-2 text-sm font-medium">Message</p>
                    <textarea name="message" rows="8" placeholder="Enter your message" className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
                    required=""></textarea>
                </div>
                <button type="submit" className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all">Submit <img  alt="" className="w-4" src={assets.arrow_icon}/>
                </button>
            </motion.form>
        </motion.div>
    );
}

export default ContactUs;