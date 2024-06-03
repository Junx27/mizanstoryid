import ProgressBar from "@/Components/Backend/ProgressBar";
import Sidebar from "@/Components/Backend/Sidebar";
import { usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { url } from "../../Data/Url.js";
import PopOver from "@/Components/PopOver.jsx";
import CreateFoto from "./Foto/CreateFoto.jsx";
import Button from "@/Components/Backend/Button.jsx";

function Galeri({ fotos }) {
    const [open, setOpen] = useState(false);
    const totalItemsFoto = 20;
    const completedItemsFoto = fotos.length;
    const progressFoto = (completedItemsFoto / totalItemsFoto) * 100;
    const totalItemsVideo = 10;
    const completedItemsVideo = 7;
    const progressVideo = (completedItemsVideo / totalItemsVideo) * 100;
    const foto = "Galeri foto";
    const video = "Galeri video";
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div className="ml-[150px] pt-20">
                <div className="flex mb-10">
                    <div className="w-full">
                        <ProgressBar
                            progress={progressFoto}
                            nama={foto}
                            progressComplete={completedItemsFoto}
                            progressValue={totalItemsFoto}
                            totalProgress={progressFoto}
                        />
                    </div>
                    <div className="w-full ml-20 mr-5">
                        <ProgressBar
                            progress={progressVideo}
                            nama={video}
                            progressComplete={completedItemsVideo}
                            progressValue={totalItemsVideo}
                            totalProgress={progressVideo}
                        />
                    </div>
                </div>
                <div className="flex justify-between">
                    <h1 className="font-bold mb-4">Galeri</h1>
                    <div className="flex mx-5">
                        {fotos.length < 20 && (
                            <div onClick={() => setOpen(!open)}>
                                <p className="mr-5 text-xs text-white bg-black rounded-lg p-2 cursor-pointer">
                                    Tambah foto
                                </p>
                            </div>
                        )}
                        <a href="/tambahvideo">
                            <div className="text-xs text-white bg-black rounded-lg p-2">
                                Tambah video
                            </div>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="mt-5 grid grid-cols-4 gap-5 mr-5">
                        {fotos.map((row, index) => (
                            <div
                                className="shadow-lg p-5 rounded-lg"
                                key={index}
                            >
                                <div>
                                    <img
                                        src={url + row.gambar}
                                        alt=""
                                        className="w-full h-[200px] object-cover rounded-lg"
                                    />
                                    <h1 className="font-bold mt-2">
                                        {row.nama}
                                    </h1>
                                    <p className="mt-2 text-gray-400 text-xs">
                                        {row.deskripsi}
                                    </p>
                                    <div className="mt-3 text-xs flex justify-between items-center">
                                        <div className="flex">
                                            <span className="material-symbols-outlined text-xs text-gray-500">
                                                visibility
                                            </span>
                                            <p className="ml-3 text-gray-500">
                                                {row.viewer}
                                            </p>
                                        </div>
                                        <div>
                                            <a href="/editfoto1">
                                                <Button>Edit</Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {open && (
                    <PopOver>
                        <button
                            className="text-white z-50"
                            onClick={() => setOpen(!open)}
                        >
                            Close
                        </button>
                        <CreateFoto />
                    </PopOver>
                )}
            </div>
        </div>
    );
}

export default Galeri;
