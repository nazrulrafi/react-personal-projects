import React, {useState} from 'react';
import logo from "../assets/logo.svg";
import logoDark from "../assets/logo-dark.svg";
import {sidebarData} from "../data/sidebarData.js";
import {Link, useLocation} from "react-router-dom";

function Sidebar({toggleMobileMenu,ref}) {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation();
    const toggleItem=(ind)=>{
        setActiveIndex(activeIndex === ind ? null : ind);
    }

    return (
        <>
            {/* Overlay */}
            {toggleMobileMenu && (
                <div
                    className="fixed inset-0 bg-[#00000073] z-40 md:hidden"
                ></div>
            )}
            <aside ref={ref} className={`fixed  flex flex-col xl:mt-0 top-0 px-0 md:px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-full transition-all duration-300 ease-in-out z-50 border-r border-gray-200 w-[0px] md:w-[290px] xl:translate-x-0 ${toggleMobileMenu ? "translate-x-0 w-[290px]" : "-translate-x-full w-[0px]"}
          md:translate-x-0 md:w-[290px]`}>
                <div className="py-8 flex  justify-start"><a href="/10-dashboard/public">
                    <img alt="Logo" loading="lazy" width="150" height="40" decoding="async" data-nimg="1"
                         src={logo} className="dark:hidden"/>
                    <img alt="Logo" loading="lazy" width="150" height="40" decoding="async" data-nimg="1"
                         className="hidden dark:block"
                         src={logoDark}/></a>
                </div>

                <div className="flex flex-col overflow-y-auto  duration-300 ease-linear no-scrollbar">
                    <nav className="mb-6">
                        <div className="flex flex-col gap-4">
                            <div>
                                <ul className="flex flex-col gap-1">
                                    {sidebarData.map((sidebarItem, index) => (
                                        <li>
                                            <button onClick={() => toggleItem(index)}
                                                    className=" menu-item group  menu-item-active cursor-pointer lg:justify-start">
                                            <span className=" menu-item-icon-active">
                                                <img src={sidebarItem.icon} alt=""/>
                                            </span>
                                                <span
                                                    className={`menu-item-text ${activeIndex === index ? "text-[#465fff]" : ""}`}>{sidebarItem.title}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                     fill="none"
                                                     className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                                                         activeIndex === index ? "rotate-180 text-[#465fff]" : "rotate-0"
                                                     }`}>
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="1.5"
                                                          d="M4.792 7.396 10 12.604l5.208-5.208">
                                                    </path>
                                                </svg>
                                            </button>
                                            {sidebarItem.items && activeIndex === index && (
                                                <div className="overflow-hidden transition-all duration-300">
                                                    <ul className="mt-2 space-y-1 ml-9">
                                                        {sidebarItem.items.map((item, index) => (
                                                            <li className={`hover:bg-[#e4e7ec] hover:rounded-lg ${location.pathname === item.path ? "bg-[#ecf3ff] text-[#465fff]" : ""} `}
                                                                key={index}>
                                                                <Link to={item.path}
                                                                      className="menu-dropdown-item menu-dropdown-item-active">
                                                                    {item.name}
                                                                    <span
                                                                        className="flex items-center gap-1 ml-auto"></span>
                                                                </Link>
                                                            </li>
                                                        ))}

                                                    </ul>
                                                </div>
                                            )}

                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </aside>
        </>

    );
}

export default Sidebar;