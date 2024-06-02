import React, { useEffect, useState } from "react";
import { NavbarName } from "@/Data/Navbar.js";
import { usePage } from "@inertiajs/react";

function Navbar() {
    const { url } = usePage();
    const [changeColor, setChangeColor] = useState(false);
    const [open, setOpen] = useState(false);

    const changeBackgroundColor = () => {
        let scroll = window.scrollY;
        if (scroll > 10) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    const controlMenu = () => {
        let scrollMenu = window.scrollY;
        if (scrollMenu > 10) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackgroundColor);
        window.addEventListener("scroll", controlMenu);
        return () => {
            window.removeEventListener("scroll", changeBackgroundColor);
            window.removeEventListener("scroll", controlMenu);
        };
    }, []);
    return (
        <div
            className={`w-full transition-all duration-500 z-50 ${
                changeColor
                    ? "backdrop-blur-sm bg-black/80 sticky top-0 shadow shadow-blue-400 my-0"
                    : "backdrop-blur-sm bg-white/80 sticky -top-32 my-5"
            }`}
        >
            <div className="flex justify-between items-center px-5 md:px-20 text-[13px] ">
                <div>
                    <img
                        src={!changeColor ? "logo.PNG" : "logowhite.PNG"}
                        alt=""
                        className="w-[60px]"
                    />
                </div>
                <div className="hidden md:block">
                    {NavbarName.map((row, index) => (
                        <a
                            href={row.link}
                            key={index}
                            className={`transition-all duration-1000 mx-5 p-2 hover:text-blue-500 ${
                                url === row.link
                                    ? "text-blue-500 border-b border-blue-500"
                                    : `${
                                          !changeColor
                                              ? "text-black"
                                              : "text-white"
                                      }`
                            }`}
                        >
                            {row.nama}
                        </a>
                    ))}
                    <a
                        className={`transition-all duration-500 ${
                            changeColor
                                ? "bg-white text-black p-2 px-3"
                                : "bg-black p-2 px-3 text-white"
                        }`}
                    >
                        Contact
                    </a>
                </div>
                <div className="block md:hidden">
                    <h1
                        className={`text-3xl ${
                            changeColor ? "text-white" : "text-black"
                        }`}
                        onClick={() => setOpen(!open)}
                    >
                        &#9776;
                    </h1>
                </div>
            </div>
            <div
                className={`text-sm -mt-10 transition-all duration-700 delay-100 md:hidden absolute top-[100px] z-50 backdrop-blur-sm bg-black/75 w-full ${
                    open ? "h-[350px]" : "h-0"
                }`}
            >
                <div
                    className={`transition-all duration-300 -ml-32 ${
                        open ? "visible ml-0" : "invisible"
                    }`}
                >
                    {NavbarName.map((row, index) => (
                        <a
                            href={row.link}
                            key={index}
                            className={`w-20 my-5 text-white transition-all duration-700 delay-100 mx-5 p-2 hover:text-blue-500 flex flex-col ${
                                url === row.link
                                    ? "text-blue-500 border-b border-blue-500"
                                    : `${open ? "ml-10" : "-ml-32"}`
                            }`}
                        >
                            {row.nama}
                        </a>
                    ))}
                    <a
                        className={`ml-10 ${
                            !open
                                ? "bg-white text-black p-2 px-3"
                                : "bg-black p-2 px-3 text-white"
                        }`}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
