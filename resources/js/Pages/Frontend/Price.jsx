import Button from "@/Components/Backend/Button";
import FormaterRupiah from "@/Components/Backend/FormaterRupiah";
import SidebarKonsumen from "@/Components/Frontend/SidebarUser";
import React, { useState } from "react";
import CreateOrder from "./Controller/CreateOrder";
import PopOver from "@/Components/PopOver";
import axios from "axios";
import { api } from "@/Data/Api";
import CloseButton from "@/Components/Backend/CloseButton";

function Price({ aerial, fpv }) {
    const [openOrder, setOpenOrder] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState();
    const handleEditOrder = async (id) => {
        try {
            const response = await axios.get(`${api}tambahorder/${id}`);
            setSelectedOrder(response.data);
            setOpenOrder(true);
        } catch (error) {
            console.error("Error fetching foto data:", error);
        }
    };
    return (
        <div>
            <SidebarKonsumen />
            <div className="mx-5 md:mx-0 md:ml-[150px]">
                <div>
                    <img
                        src="djmavic.png"
                        alt=""
                        className="scale-50 md:w-[600px] h-96 object-cover mx-auto -mt-20 md:mt-0"
                    />
                    <h1 className="-mt-32 md:-mt-20 font-bold text-sm md:text-xl text-center my-2">
                        Harga Sewa Drone AERIAL
                    </h1>
                    <p className="text-gray-500 text-[10px] md:text-xs text-center mb-10">
                        Pilihlah sesuai kebutuhan dokumentasi anda, harga
                        sewaktu-waktu dapat berubah
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:mx-10">
                        {aerial.map((row, index) => (
                            <div
                                className={`transition-all duration-500 p-5 rounded-lg h-[520px] shadow-md hover:shadow-lg`}
                                key={index}
                            >
                                <h1
                                    className={`uppercase font-bold text-center mb-10 mt-5 p-2 rounded-md ${
                                        row.nama === "PAKET BRONZE"
                                            ? "bg-[#F7EFE5]"
                                            : ""
                                    } ${
                                        row.nama === "PAKET SILVER"
                                            ? "bg-[#F1EAFF]"
                                            : ""
                                    } ${
                                        row.nama === "PAKET GOLD"
                                            ? "bg-[#fddcc5]"
                                            : ""
                                    }`}
                                >
                                    {row.nama}
                                </h1>
                                <p className="text-xs mt-5 h-20 text-justify indent-8">
                                    {row.deskripsi}
                                </p>
                                <ul className="list-inside list-disc text-xs mb-5">
                                    <li className="mt-2">
                                        {row.jumlah_baterai}
                                    </li>
                                    <li>{row.jam_terbang}</li>
                                    <li>{row.operator}</li>
                                    <li>{row.video}</li>
                                    <li>{row.output}</li>
                                    <li>{row.jam_pilot}</li>
                                    <li>{row.lokasi}</li>
                                </ul>
                                <p className="text-xs text-center capitalize mt-10">
                                    Mulai dari
                                </p>
                                <h2 className="text-center my-3 font-bold mt-5">
                                    <FormaterRupiah number={row.harga} />
                                </h2>
                                <div
                                    className="flex justify-center mt-5"
                                    onClick={() => handleEditOrder(row.id)}
                                >
                                    <Button className={"w-64"}>
                                        Order NOW!
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-20">
                    <img
                        src="fpv2.png"
                        alt=""
                        className="w-full md:w-[800px] h-[470px] scale-[40%] -mt-20 md:mt-0 object-cover mx-auto"
                    />
                    <h1 className="-mt-32 md:-mt-20 font-bold text-sm md:text-xl text-center my-2">
                        Harga Sewa Drone FPV
                    </h1>
                    <p className="text-gray-500 text-[10px] md:text-xs text-center mb-10">
                        Pilihlah sesuai kebutuhan dokumentasi anda, harga
                        sewaktu-waktu dapat berubah
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:mx-10">
                        {fpv.map((row, index) => (
                            <div
                                className={`transition-all duration-500 p-5 rounded-lg h-[520px] shadow-md hover:shadow-lg`}
                                key={index}
                            >
                                <h1
                                    className={`uppercase font-bold text-center mb-10 mt-5 p-2 rounded-md ${
                                        row.nama === "PAKET BRONZE"
                                            ? "bg-[#F7EFE5]"
                                            : ""
                                    } ${
                                        row.nama === "PAKET SILVER"
                                            ? "bg-[#F1EAFF]"
                                            : ""
                                    } ${
                                        row.nama === "PAKET GOLD"
                                            ? "bg-[#fddcc5]"
                                            : ""
                                    }`}
                                >
                                    {row.nama}
                                </h1>
                                <p className="text-xs mt-5 h-20 text-justify indent-8">
                                    {row.deskripsi}
                                </p>
                                <ul className="list-inside list-disc text-xs mb-5">
                                    <li className="mt-2">
                                        {row.jumlah_baterai}
                                    </li>
                                    <li>{row.jam_terbang}</li>
                                    <li>{row.operator}</li>
                                    <li>{row.video}</li>
                                    <li>{row.output}</li>
                                    <li>{row.jam_pilot}</li>
                                    <li>{row.lokasi}</li>
                                </ul>
                                <p className="text-xs text-center capitalize mt-10">
                                    Mulai dari
                                </p>
                                <h2 className="text-center my-3 font-bold mt-5">
                                    <FormaterRupiah number={row.harga} />
                                </h2>
                                <div
                                    className="flex justify-center mt-5"
                                    onClick={() => handleEditOrder(row.id)}
                                >
                                    <Button className={"w-64"}>
                                        Order NOW!
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {openOrder && (
                    <PopOver>
                        <div className="relative">
                            <div
                                className="absolute top-2 right-2 z-50 "
                                onClick={() => setOpenOrder(!openOrder)}
                            >
                                <CloseButton />
                            </div>
                            <div>
                                <CreateOrder order={selectedOrder} />
                            </div>
                        </div>
                    </PopOver>
                )}
            </div>
        </div>
    );
}

export default Price;
