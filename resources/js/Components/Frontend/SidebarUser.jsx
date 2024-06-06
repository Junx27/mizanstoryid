import { usePage } from "@inertiajs/react";
import React from "react";
import { NavbarName } from "../../Data/Navbar.js";

function SidebarKonsumen() {
    const { url } = usePage();
    return (
        <div>
            <div className="z-40 fixed top-0 p-2 w-full text-end py-2 pr-10">
                <p className="text-gray-500 text-[10px] font-light">
                    Copy Right &copy; 2024 Mizan Story.Id Reserved.
                </p>
            </div>
            <div className="z-50 bg-white fixed w-32 h-screen border-r shadow">
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
                            <img src={row.gambar} alt="" className="w-10" />
                            <span
                                className={`mt-2 text-[8px] px-1 rounded shadow ${
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
        </div>
    );
}

export default SidebarKonsumen;
