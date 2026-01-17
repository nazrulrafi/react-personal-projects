import React, {useState} from 'react';
import Title from "../components/Title.jsx";
import {assets, facilityIcons, roomsDummyData} from "../assets/assets.js";
import {useNavigate} from "react-router-dom";
import StarRating from "../components/StarRating.jsx";

const CheckBox = ({label,selected = false,onChange=() =>{ }}) =>{
    return (
        <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
            <input type="checkbox" checked={selected} onChange={(e)=>onChange(e.target.checked, label)}/>
            <span className="font-light select-none">{label}</span>
        </label>
    )
}

const RadioButton = ({label,selected = false,onChange=() =>{ }}) =>{
    return (
        <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
            <input type="radio" name="sortOption" checked={selected} onChange={()=>onChange(label)}/>
            <span className="font-light select-none">{label}</span>
        </label>
    )
}

function AllRooms(props) {
    const navigate = useNavigate();
    const [openFilter, setOpenFilter] = useState(false);

    const roomTypes = [
        "Single Bed",
        "Double Bed",
        "Luxury Room",
        "Family Suite"
    ];

    const priceRanges = [
        "0 to 500",
        "500 to 1000",
        "1000 to 2500",
        "2500 to 5000",
    ];

    const sortOptions = [
        "Price Low to High",
        "Price High to Low",
        "Newset First"
    ]
    return (
        <div
            className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
            <div>
                <Title align="left" title="Hotel Rooms"
                       subtitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."/>
                {roomsDummyData.map((room) => (
                    <div key={room._id}
                         className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0">
                        <img title="View Room Details" alt="hotel-img"
                             className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
                             src={room.images[0]} onClick={() => {
                            navigate(`/rooms/${room._id}`);
                            scrollTo(0, 0)
                        }}/>
                        <div className="md:w-1/2 flex flex-col gap-2">
                            <p className="text-gray-500">{room.hotel.city}</p>
                            <p className="text-gray-800 text-3xl font-playfair cursor-pointer" onClick={() => {
                                navigate(`/rooms/${room._id}`);
                                scrollTo(0, 0)
                            }} title="View Room Details">{room.hotel.name}</p>
                            <div className="flex items-center">
                                <StarRating/>
                                <p className="ml-2">200+ reviews</p>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                                <img alt="location-icon" src={assets.locationIcon}/>
                                <span>{room.hotel.address}</span>
                            </div>
                            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                                {room.amenities.map((item, index) => (
                                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70">
                                        <img alt="Room Service" className="w-5 h-5" src={facilityIcons[item]}/>
                                        <p className="text-xs">{item}</p>
                                    </div>
                                ))}

                            </div>
                            <p className="text-xl font-medium text-gray-700">${room.pricePerNight} /night</p></div>
                    </div>
                ))}
            </div>
            <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
                <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilter && "border-b"}`}>
                    <p className="text-base font-medium text-gray-800">FILTERS</p>
                    <div className="text-xs cursor-pointer">
                        <span onClick={()=>setOpenFilter(!openFilter)} className="lg:hidden">
                            {openFilter ? "HIDE" : "SHOW"}
                        </span>
                        <span className="hidden lg:block">CLEAR</span>
                    </div>
                </div>
                <div className={`${openFilter ? "h-auto" : "h-0 lg:h-auto"} h-0 overflow-hidden transition-all duration-700`}>
                    <div className="px-5 pt-5">
                        <p className="font-medium text-gray-800 pb-2">Popular filters</p>
                        {roomTypes.map((room,index)=>(
                            <CheckBox key={index} label={room}/>
                        ))}
                    </div>
                    <div className="px-5 pt-5">
                        <p className="font-medium text-gray-800 pb-2">Price Range</p>
                        {priceRanges.map((range,index)=>(
                            <CheckBox key={index} label={`$ ${range}`}/>
                        ))}
                    </div>
                    <div className="px-5 pt-5 pb-7">
                        <p className="font-medium text-gray-800 pb-2">Sort By</p>
                        {sortOptions.map((option,index)=>(
                            <RadioButton key={index} label={option}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllRooms;