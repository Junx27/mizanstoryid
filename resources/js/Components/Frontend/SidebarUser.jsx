import { usePage } from "@inertiajs/react";
import React from "react";
import { NavbarName } from "../../Data/Navbar.js";

function SidebarKonsumen() {
    const { url } = usePage();
    return (
        <div>
            <div className="hidden md:block z-40 fixed top-0 p-2 w-full text-end py-2 pr-10">
                <p className="text-gray-500 text-[10px] font-light">
                    Copy Right &copy; 2024 Mizan Story.Id Reserved.
                </p>
            </div>
            <div className="hidden md:block z-50 bg-white fixed w-[60px] md:w-32 h-screen border-r shadow">
                <img src="logo.png" alt="" className="w-20 mx-auto pt-2" />
                <hr />
                <div>
                    {NavbarName.map((row, index) => (
                        <a
                            href={row.link}
                            key={index}
                            className={`flex flex-col items-center text-xs mt-10 mb-8 ${
                                url === row.link ? "text-white" : "text-black"
                            }`}
                        >
                            <img
                                src={row.gambar}
                                alt=""
                                className="w-7 md:w-12"
                            />
                            <span
                                className={`mt-2 text-[5px] md:text-[8px] px-1 rounded shadow ${
                                    url === row.link
                                        ? "bg-blue-400 animate-pulse"
                                        : "bg-none"
                                }`}
                            >
                                {row.nama}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
            <div className="md:hidden z-50 bg-white fixed bottom-0 w-full h-[60px] border-t">
                <div className="w-full flex justify-center items-center">
                    {NavbarName.map((row, index) => (
                        <div
                            className="mt-2 flex justify-between items-center"
                            key={index}
                        >
                            <a
                                href={row.link}
                                key={index}
                                className={`mx-3 text-center text-xs p-2 rounded-lg ${
                                    url === row.link
                                        ? "bg-gray-100 shadow-lg"
                                        : "bg-white"
                                }`}
                            >
                                <img src={row.gambar} alt="" className="w-32" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SidebarKonsumen;
