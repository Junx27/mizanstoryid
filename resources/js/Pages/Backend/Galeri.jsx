import ProgressBar from "@/Components/Backend/ProgressBar";
import Sidebar from "@/Components/Backend/Sidebar";
import { usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { url } from "../../Data/Url.js";
import { api } from "@/Data/Api.js";
import PopOver from "@/Components/PopOver.jsx";
import CreateFoto from "./Foto/CreateFoto.jsx";
import Button from "@/Components/Backend/Button.jsx";
import CloseButton from "@/Components/Backend/CloseButton.jsx";
import EditFoto from "./Foto/EditFoto.jsx";
import axios from "axios";
import CreateVideo from "./Video/CreateVideo.jsx";
import EditVideo from "./Video/EditVideo.jsx";

function Galeri({ fotos, videos }) {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openVideo, setOpenVideo] = useState(false);
    const [openEditVideo, setOpenEditVideo] = useState(false);
    const totalItemsFoto = 20;
    const completedItemsFoto = fotos.length;
    const progressFoto = (completedItemsFoto / totalItemsFoto) * 100;
    const totalItemsVideo = 10;
    const completedItemsVideo = videos.length;
    const progressVideo = (completedItemsVideo / totalItemsVideo) * 100;
    const foto = "Galeri foto";
    const video = "Galeri video";
    const [selectedFoto, setSelectedFoto] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleEdit = async (id) => {
        try {
            const response = await axios.get(`${api}editfoto${id}`);
            setSelectedFoto(response.data);
            setOpenEdit(true);
        } catch (error) {
            console.error("Error fetching foto data:", error);
        }
    };
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${api}hapusfoto${id}`);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };
    const handleEditVideo = async (id) => {
        try {
            const response = await axios.get(`${api}editvideo${id}`);
            setSelectedVideo(response.data);
            setOpenEditVideo(true);
        } catch (error) {
            console.error("Error fetching foto data:", error);
        }
    };
    const handleDeleteVideo = async (id) => {
        try {
            await axios.delete(`${api}hapusvideo${id}`);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

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
                            totalProgress={progressFoto.toFixed(2)}
                        />
                    </div>
                    <div className="w-full ml-20 mr-5">
                        <ProgressBar
                            progress={progressVideo}
                            nama={video}
                            progressComplete={completedItemsVideo}
                            progressValue={totalItemsVideo}
                            totalProgress={progressVideo.toFixed(2)}
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="font-bold mb-4">Foto</h1>
                    </div>
                    <div className="flex mx-5">
                        {fotos.length < 20 && (
                            <div onClick={() => setOpen(!open)}>
                                <Button>Tambah foto</Button>
                            </div>
                        )}
                        {videos.length < 10 && (
                            <div
                                onClick={() => setOpenVideo(!openVideo)}
                                className="ml-5"
                            >
                                <Button>Tambah video</Button>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <div className="mt-5 grid grid-cols-4 gap-5 mr-5">
                        {fotos.map((row, index) => (
                            <div className="" key={index}>
                                <div>
                                    <img
                                        src={url + row.gambar}
                                        alt=""
                                        className="w-full h-[200px] object-cover rounded hover:rounded-none"
                                    />

                                    <h1 className="px-2 text-xs capitalize font-bold mt-2">
                                        {row.nama}
                                    </h1>
                                    <p className="px-2 mt-2 text-gray-400 text-[10px] h-4">
                                        {row.deskripsi}
                                    </p>
                                    <div className="px-2 text-[10px] flex justify-between items-center">
                                        <div className="flex">
                                            <span className="material-symbols-outlined text-xs text-gray-500">
                                                visibility
                                            </span>
                                            <p className="ml-3 text-gray-500 w-20 truncate">
                                                {row.viewer.toLocaleString()}{" "}
                                                views
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <div
                                                onClick={() =>
                                                    handleEdit(row.id)
                                                }
                                            >
                                                <Button className={"w-20"}>
                                                    Edit
                                                </Button>
                                            </div>
                                            <div
                                                onClick={() =>
                                                    handleDelete(row.id)
                                                }
                                                className="ml-3"
                                            >
                                                <Button className={"w-20"}>
                                                    Hapus
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h1 className="font-bold my-4">Video</h1>
                    </div>
                    <div className="mt-5 grid grid-cols-4 gap-5 mr-5">
                        {videos.map((row, index) => (
                            <div className="" key={index}>
                                <div>
                                    <img
                                        src={url + row.gambar}
                                        alt=""
                                        className="w-full h-[200px] object-cover rounded hover:rounded-none"
                                    />

                                    <h1 className="px-2 text-xs capitalize font-bold mt-2">
                                        {row.nama}
                                    </h1>
                                    <p className="px-2 mt-2 text-gray-400 text-[10px] h-4">
                                        {row.deskripsi}
                                    </p>
                                    <div className="px-2 text-[10px] flex justify-between items-center">
                                        <div className="flex">
                                            <span className="material-symbols-outlined text-xs text-gray-500">
                                                visibility
                                            </span>
                                            <p className="ml-3 text-gray-500 w-20 truncate">
                                                {row.viewer.toLocaleString()}{" "}
                                                views
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <div
                                                onClick={() =>
                                                    handleEditVideo(row.id)
                                                }
                                            >
                                                <Button className={"w-20"}>
                                                    Edit
                                                </Button>
                                            </div>
                                            <div
                                                onClick={() =>
                                                    handleDeleteVideo(row.id)
                                                }
                                                className="ml-3"
                                            >
                                                <Button className={"w-20"}>
                                                    Hapus
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {open && (
                    <PopOver>
                        <div className="relative">
                            <div
                                className="absolute top-2 right-2 z-50"
                                onClick={() => setOpen(!open)}
                            >
                                <CloseButton />
                            </div>
                            <CreateFoto />
                        </div>
                    </PopOver>
                )}
                {openEdit && (
                    <PopOver>
                        <div className="relative">
                            <div
                                className="absolute top-2 right-2 z-50"
                                onClick={() => setOpenEdit(!openEdit)}
                            >
                                <CloseButton />
                            </div>

                            <EditFoto foto={selectedFoto} />
                        </div>
                    </PopOver>
                )}
                {openVideo && (
                    <PopOver>
                        <div className="relative">
                            <div
                                className="absolute top-2 right-2 z-50"
                                onClick={() => setOpenVideo(!openVideo)}
                            >
                                <CloseButton />
                            </div>
                            <CreateVideo />
                        </div>
                    </PopOver>
                )}
                {openEditVideo && (
                    <PopOver>
                        <div className="relative">
                            <div
                                className="absolute top-2 right-2 z-50"
                                onClick={() => setOpenEditVideo(!openEditVideo)}
                            >
                                <CloseButton />
                            </div>

                            <EditVideo video={selectedVideo} />
                        </div>
                    </PopOver>
                )}
            </div>
        </div>
    );
}

export default Galeri;
