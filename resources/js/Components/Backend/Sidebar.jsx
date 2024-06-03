import { usePage } from "@inertiajs/react";
import React from "react";
import { SideBarIcon } from "../../Data/Sidebar.js";

function Sidebar() {
    const { url } = usePage();
    return (
        <div>
            <div className="bg-white text-xs font-bold z-40 fixed top-0 p-2 w-full text-end py-4 pr-10 border-b shadow">
                <h1>Hi, Admin</h1>
            </div>
            <div className="z-50 bg-white fixed w-32 h-screen border-r shadow">
                <img
                    src="logo.png"
                    alt=""
                    className="w-20 mx-auto pt-2 mb-10"
                />
                <div>
                    {SideBarIcon.map((row, index) => (
                        <a
                            href={row.link}
                            key={index}
                            className={`flex flex-col items-center text-xs mt-10 mb-8 ${
                                url === row.link
                                    ? "text-blue-400"
                                    : "text-black"
                            }`}
                        >
                            <img src={row.gambar} alt="" className="w-12" />
                            <span className="mt-2">{row.nama}</span>
                        </a>
                    ))}
                    <a
                        href="/logout"
                        className="mx-auto flex flex-col items-center text-xs my-8"
                    >
                        <img src="logout.png" alt="" className="w-12" />
                        <span className="mt-2">Logout</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
