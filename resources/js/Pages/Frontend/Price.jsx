import Footer from "@/Components/Frontend/Footer";
import Navbar from "@/Components/Frontend/Navbar";
import React, { useState } from "react";

function Price() {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <div>
            <Navbar />
            <div className="m-5 md:m-20 mt-5">
                <h1 className="font-bold text-xl md:text-3xl text-center">
                    Harga{" "}
                    <span className="text-[#92bef7]">Sewa Drone AERIAL</span>
                </h1>
                <p className="text-gray-500 text-[10px] md:text-xs text-center my-3">
                    Banyak pilihan paket untuk jasa dokumentasi anda
                </p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[1, 2, 3].map((index) => (
                        <div
                            key={index}
                            className={`transition-all duration-400 w-full h-full border p-5 md:p-10 relative cursor-pointer ${
                                hoveredItem === index
                                    ? "border-blue-500 shadow-lg scale-105"
                                    : "border-black shadow scale-100"
                            }`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="relative z-10">
                                <h1
                                    className={`transition-all duration-300 text-center font-bold text-xl md:text-2xl uppercase ${
                                        hoveredItem === index
                                            ? "text-white"
                                            : "text-black"
                                    }`}
                                >
                                    paket bronze
                                </h1>
                                <p
                                    className={`transition-all duration-300 mt-5 md:mt-7 text-justify text-[10px] md:text-sm ${
                                        hoveredItem === index
                                            ? "text-white"
                                            : "text-black"
                                    }`}
                                >
                                    Kebutuhan Dokumentasi seperti Foto Video
                                    saat ngejeep Lava Tour Merapi, VW Borobudur,
                                    Pantai Gunung Kidul, atau Kebutuhan ngdrone
                                    Event dan lainnya. dengan 1 Baterai dan 1
                                    Lokasi terbang 1 Baterai Terbang 15-30 Menit
                                    Pilot / Operator Unlimited Foto Video Output
                                    File Mentah Pilot Stanby 1-2 Jam 1 Lokasi
                                </p>
                                <ul
                                    className={`transition-all duration-300 list-disc list-inside text-[10px] md:text-sm ${
                                        hoveredItem === index
                                            ? "text-white"
                                            : "text-black"
                                    }`}
                                >
                                    <li className="mt-2">1 Baterai</li>
                                    <li>Terbang 15-30 Menit</li>
                                    <li>Pilot/Operator</li>
                                    <li>Unlimited Foto Video</li>
                                    <li>Output File Mentah</li>
                                    <li>Pilot Stand By 1-2 Jam</li>
                                    <li>1 Lokasi</li>
                                </ul>
                                <p
                                    className={`transition-all duration-300 my-5 text-center text-[10px] md:text-sm ${
                                        hoveredItem === index
                                            ? "text-white"
                                            : "text-black"
                                    }`}
                                >
                                    Mulai dari
                                </p>
                                <h2
                                    className={`transition-all duration-300 my-8 text-center font-bold text-xl md:text-3xl ${
                                        hoveredItem === index
                                            ? "text-white"
                                            : "text-black"
                                    }`}
                                >
                                    Rp.750.000,00
                                </h2>
                                <button
                                    className={`transition-all duration-300 p-5 w-full font-bold text-xs md:text-sm ${
                                        hoveredItem === index
                                            ? "bg-black text-white animate-bounce"
                                            : "bg-[#92bef7] text-white"
                                    }`}
                                >
                                    Book Now!!
                                </button>
                            </div>
                            <div
                                className={`z-0 transition-all duration-500 absolute inset-0 bg-blue-400 ${
                                    hoveredItem === index ? "w-full" : "w-0"
                                }`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="m-5 md:m-20 my-20">
                <h1 className="font-bold text-xl md:text-3xl text-center">
                    Harga <span className="text-blue-400">Sewa Drone FPV</span>
                </h1>
                <p className="text-gray-500 text-[10px] md:text-xs text-center my-3">
                    Banyak pilihan paket untuk jasa dokumentasi anda
                </p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[4, 5, 6].map((index) => (
                        <div
                            key={index}
                            className={`transition-all duration-400 w-full h-full border p-5 md:p-10 relative cursor-pointer ${
                                hoveredItem === index
                                    ? "border-blue-500 shadow-lg scale-105"
                                    : "border-black shadow scale-100"
                            }`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="relative z-10">
                                <h1
                                    className={`transition-all duration-300 text-center font-bold text-xl md:text-2xl uppercase ${
                                        hoveredItem === index
                                            ? "text-white"
                                            : "text-black"
                                    }`}
                                >
                                    paket bronze
                                </h1>
                                <p
                                    className={`transition-all duration-300 mt-5 md:mt-7 text-justify text-[10px] md:text-sm ${
                                        hoveredItem === index
                                            ? "text-white"
                                            : "text-black"
                                    }`}
                                >
                                    Kebutuhan Dokumentasi seperti Foto Video
                                    saat ngejeep Lava Tour Merapi, VW Borobudur,
                                    Pantai Gunung Kidul, atau Kebutuhan ngdrone
                                    Event dan lainnya. dengan 1 Baterai dan 1
                                    Lokasi terbang 1 Baterai Terbang 15-30 Menit
                                    Pilot / Operator Unlimited Foto Video Output
                                    File Mentah Pilot Stanby 1-2 Jam 1 Lokasi
                                </p>
                                <ul
                                    className={`transition-all duration-300 list-disc list-inside text-[10px] md:text-sm ${
                                        hoveredItem === index
                                            ? "text-white"
                                            : "text-black"
                                    }`}
                                >
                                    <li className="mt-2">1 Baterai</li>
                                    <li>Terbang 15-30 Menit</li>
                                    <li>Pilot/Operator</li>
                                    <li>Unlimited Foto Video</li>
                                    <li>Output File Mentah</li>
                                    <li>Pilot Stand By 1-2 Jam</li>
                                    <li>1 Lokasi</li>
                                </ul>
                                <p
                                    className={`transition-all duration-300 my-5 text-center text-[10px] md:text-sm ${
                                        hoveredItem === index
                                            ? "text-white"
                                            : "text-black"
                                    }`}
                                >
                                    Mulai dari
                                </p>
                                <h2
                                    className={`transition-all duration-300 my-8 text-center font-bold text-xl md:text-3xl ${
                                        hoveredItem === index
                                            ? "text-white"
                                            : "text-black"
                                    }`}
                                >
                                    Rp.750.000,00
                                </h2>
                                <button
                                    className={`transition-all duration-300 p-5 w-full font-bold text-xs md:text-sm ${
                                        hoveredItem === index
                                            ? "bg-black text-white animate-bounce"
                                            : "bg-[#92bef7] text-white"
                                    }`}
                                >
                                    Book Now!!
                                </button>
                            </div>
                            <div
                                className={`z-0 transition-all duration-500 absolute inset-0 bg-blue-400 ${
                                    hoveredItem === index ? "w-full" : "w-0"
                                }`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Price;
