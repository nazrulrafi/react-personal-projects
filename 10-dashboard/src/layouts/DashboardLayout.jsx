import React, {useEffect, useRef, useState} from 'react';

import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import DashboardHeader from "../components/DashboardHeader.jsx";


function DashboardLayout(props) {
    const [toggleMobileMenu,setToggleMobileMenu] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setToggleMobileMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className="flex h-screen">
            <Sidebar toggleMobileMenu={toggleMobileMenu} ref={sidebarRef} />
            <div className="flex-1 transition-all  duration-300 ease-in-out xl:ml-[290px]">
                <DashboardHeader setToggleMobileMenu={setToggleMobileMenu}/>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;