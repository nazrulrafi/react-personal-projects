import React from 'react';
import MainNavigation from "../components/MainNavigation.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.jsx";

function RootLayout(props) {
    return (
        <>
            <MainNavigation/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default RootLayout;