import './App.css'
import Navbar from "./components/Navbar.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import React from "react";
import AllRooms from "./pages/AllRooms.jsx";
import RoomDetails from "./pages/RoomDetails.jsx";
import MyBooking from "./pages/MyBooking.jsx";
import HotelRegistration from "./components/HotelRegistration.jsx";
import Layout from "./pages/hotelOwner/Layout.jsx";
import Dashboard from "./pages/hotelOwner/Dashboard.jsx";
import ListRoom from "./pages/hotelOwner/ListRoom.jsx";
import AddRoom from "./pages/hotelOwner/AddRoom.jsx";

function App() {
  const iaOwnerPath = useLocation().pathname.includes("owner")
  return (
    <div>
        {!iaOwnerPath && <Navbar/>}
        {false && <HotelRegistration/> }
        <div className="min-h-[70vh]">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/rooms" element={<AllRooms/>}/>
            <Route path="/rooms/:id" element={<RoomDetails/>}/>
            <Route path="/my-bookings" element={<MyBooking/>}/>
            <Route path="/owner" element={<Layout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="add-room" element={<AddRoom/>}/>
                <Route path="list-room" element={<ListRoom/>}/>
            </Route>
          </Routes>
        </div>
        <Footer/>

    </div>
  )
}

export default App
