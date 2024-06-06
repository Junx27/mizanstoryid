import SidebarKonsumen from "@/Components/Frontend/SidebarUser";
import PopOver from "@/Components/PopOver";
import { url } from "@/Data/Url";
import React, { useState } from "react";
import UpdateFoto from "./Controller/UpdateFoto";
import UpdateVideo from "./Controller/UpdateVideo";
import { api } from "@/Data/Api";
import axios from "axios";

function Portofolio({ fotos, videos }) {
    const [openVideo, setOpenVideo] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState();
    const [openFoto, setOpenFoto] = useState(false);
    const [selectedFoto, setSelectedFoto] = useState();
    const handleEditVideo = async (id) => {
        try {
            const response = await axios.get(`${api}viewvideo/${id}`);
            setSelectedVideo(response.data);
            setOpenVideo(true);
        } catch (error) {
            console.error("Error fetching foto data:", error);
        }
    };
    const handleEditFoto = async (id) => {
        try {
            const response = await axios.get(`${api}viewfoto/${id}`);
            setSelectedFoto(response.data);
            setOpenFoto(true);
        } catch (error) {
            console.error("Error fetching foto data:", error);
        }
    };
    return (
        <div>
            <SidebarKonsumen />
            <div className="ml-[150px]">
                <div className="">
                    <h1 className="font-bold text-xl text-center pt-8 py-2">
                        Dokumentasi Video Mizan Story.Id
                    </h1>
                    <p className="text-gray-500 text-xs text-center mb-10">
                        Gambar diambil dengan menggunakan drone AERIAL dan drone
                        FPV
                    </p>
                </div>
                <div className="pt-5 flex gap-5 mr-5 overflow-x-auto">
                    {videos.map((row, index) => (
                        <div
                            className=""
                            key={index}
                            onClick={() => handleEditVideo(row.id)}
                        >
                            <div className="w-64">
                                <img
                                    src={url + row.gambar}
                                    alt=""
                                    className="transition-all duration-500 w-full h-[200px] object-cover rounded hover:rounded-none hover:brightness-90"
                                />

                                <h1 className="px-2 text-xs capitalize font-bold mt-2">
                                    {row.nama}
                                </h1>
                                <p className="px-2 mt-2 text-gray-400 text-[10px] h-4">
                                    {row.deskripsi}
                                </p>
                                <div className="px-2 text-[10px] flex justify-between items-center">
                                    <div className="flex mt-5">
                                        <span className="material-symbols-outlined text-xs text-gray-500">
                                            visibility
                                        </span>
                                        <p className="ml-3 text-gray-500 w-20 truncate">
                                            {row.viewer.toLocaleString()} views
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <h1 className="font-bold text-xl text-center mt-10 my-2">
                    Dokumentasi Foto Mizan Story.Id
                </h1>
                <p className="text-gray-500 text-xs text-center mb-10">
                    Gambar diambil dengan menggunakan drone AERIAL dan drone FPV
                </p>
                <div>
                    <div className="mt-5 grid grid-cols-4 gap-5 mr-5">
                        {fotos.map((row, index) => (
                            <div
                                className=""
                                key={index}
                                onClick={() => handleEditFoto(row.id)}
                            >
                                <div>
                                    <img
                                        src={url + row.gambar}
                                        alt=""
                                        className="transition-all duration-500 w-full h-[200px] object-cover rounded hover:rounded-none hover:brightness-90"
                                    />

                                    <h1 className="px-2 text-xs capitalize font-bold mt-2">
                                        {row.nama}
                                    </h1>
                                    <p className="px-2 mt-2 text-gray-400 text-[10px] h-4">
                                        {row.deskripsi}
                                    </p>
                                    <div className="px-2 text-[10px] flex justify-between items-center">
                                        <div className="flex mt-5">
                                            <span className="material-symbols-outlined text-xs text-gray-500">
                                                visibility
                                            </span>
                                            <p className="ml-3 text-gray-500 w-20 truncate">
                                                {row.viewer.toLocaleString()}{" "}
                                                views
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {openFoto && (
                    <PopOver>
                        <div className="relative">
                            <UpdateFoto foto={selectedFoto} />
                        </div>
                    </PopOver>
                )}
                {openVideo && (
                    <PopOver>
                        <div className="relative">
                            <UpdateVideo video={selectedVideo} />
                        </div>
                    </PopOver>
                )}
            </div>
        </div>
    );
}

export default Portofolio;
