import Button from "@/Components/Backend/Button";
import CloseButton from "@/Components/Backend/CloseButton";
import ProgressBar from "@/Components/Backend/ProgressBar";
import Sidebar from "@/Components/Backend/Sidebar";
import PopOver from "@/Components/PopOver";
import React, { useState } from "react";
import CreateBlog from "./Blog/CreateBlog";
import { url } from "@/Data/Url";
import DateFormater from "@/Components/Backend/DateFormater";
import { api } from "@/Data/Api";
import axios from "axios";
import EditBlog from "./Blog/EditBlog";
import CreatePaket from "./Paket/CreatePaket";
import EditPaket from "./Paket/EditPaket";
import HeaderSubText from "@/Components/Backend/HeaderSubText";
import FormaterRupiah from "@/Components/Backend/FormaterRupiah";

function Menu({ blogs, aerial, fpv }) {
    const [openCreateBlog, setOpenCreateBlog] = useState();
    const [openCreatePaket, setOpenCreatePaket] = useState();
    const [openEditBlog, setOpenEditBlog] = useState();
    const [openEditAerial, setOpenEditAerial] = useState();
    const [openEditFpv, setOpenEditFpv] = useState();
    const totalItemsAerail = 3;
    const completedItemsAerial = aerial.length;
    const progressAerial = (completedItemsAerial / totalItemsAerail) * 100;
    const totalItemsFpv = 3;
    const completedItemsFpv = fpv.length;
    const progressFpv = (completedItemsFpv / totalItemsFpv) * 100;
    const totalItemsBlog = 2000;
    const completedItemsBlog = blogs.length;
    const progressBlog = (completedItemsBlog / totalItemsBlog) * 100;
    const AERIAL = "Paket AERIAL";
    const video = "Paket FPV";
    const blog = "Blog";
    const [selectedBlog, setSelectedBlog] = useState();
    const [selectedAerial, setSelectedAerial] = useState();
    const [selectedFpv, setSelectedFpv] = useState();
    const handleEditBlog = async (id) => {
        try {
            const response = await axios.get(`${api}editblog${id}`);
            setSelectedBlog(response.data);
            setOpenEditBlog(true);
        } catch (error) {
            console.error("Error fetching foto data:", error);
        }
    };
    const handleDeleteBlog = async (id) => {
        try {
            await axios.delete(`${api}hapusblog${id}`);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };
    const handleEditArial = async (id) => {
        try {
            const response = await axios.get(`${api}editpaket${id}`);
            setSelectedAerial(response.data);
            setOpenEditAerial(true);
        } catch (error) {
            console.error("Error fetching foto data:", error);
        }
    };
    const handleDeleteAerial = async (id) => {
        try {
            await axios.delete(`${api}hapuspaket${id}`);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };
    const handleEditFpv = async (id) => {
        try {
            const response = await axios.get(`${api}editpaket${id}`);
            setSelectedFpv(response.data);
            setOpenEditFpv(true);
        } catch (error) {
            console.error("Error fetching foto data:", error);
        }
    };
    const handleDeleteFpv = async (id) => {
        try {
            await axios.delete(`${api}hapuspaket${id}`);
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
                <div className="flex">
                    <div className="fixed w-[300px] p-10 shadow-lg rounded-lg">
                        <div className="my-3">
                            <ProgressBar
                                progress={progressAerial}
                                nama={AERIAL}
                                progressComplete={completedItemsAerial}
                                progressValue={totalItemsAerail}
                                totalProgress={progressAerial.toFixed(2)}
                            />
                        </div>
                        <div className="my-3">
                            <ProgressBar
                                progress={progressFpv}
                                nama={video}
                                progressComplete={completedItemsFpv}
                                progressValue={totalItemsFpv}
                                totalProgress={progressFpv.toFixed(2)}
                            />
                        </div>
                        <div className="my-3">
                            <ProgressBar
                                progress={progressBlog}
                                nama={blog}
                                progressComplete={completedItemsBlog}
                                progressValue={totalItemsBlog}
                                totalProgress={progressBlog}
                            />
                        </div>
                        <div
                            className="mt-10 flex justify-center text-xs"
                            onClick={() => setOpenCreatePaket(!openCreatePaket)}
                        >
                            <Button className={"w-full"}>Tambah paket</Button>
                        </div>
                        <div
                            className="mt-0 flex justify-center text-xs"
                            onClick={() => setOpenCreateBlog(!openCreateBlog)}
                        >
                            <Button className={"w-full"}>Tambah blog</Button>
                        </div>
                    </div>
                    <div className="ml-[350px]">
                        <div>
                            <HeaderSubText nama={"Paket AERIAL"} />
                            <div className="grid grid-cols-3 gap-5 mr-5 font-medium">
                                {aerial.map((row, index) => (
                                    <div
                                        className="transition-all duration-500 p-5 rounded-lg shadow-md hover:shadow-lg"
                                        key={index}
                                    >
                                        <h1 className="uppercase font-bold text-center">
                                            {row.nama}
                                        </h1>
                                        <p className="text-gray-500 text-xs mt-5 h-20 text-justify">
                                            {row.deskripsi}
                                        </p>
                                        <ul className="text-gray-500 list-inside list-disc text-xs mb-5">
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
                                        <p className="text-gray-500 text-xs text-center capitalize">
                                            Mulai dari
                                        </p>
                                        <h2 className="text-center my-3 font-bold">
                                            <FormaterRupiah
                                                number={row.harga}
                                            />
                                        </h2>
                                        <div className="mt-5 flex justify-center mx-5">
                                            <div
                                                onClick={() =>
                                                    handleEditFpv(row.id)
                                                }
                                            >
                                                <Button className={"w-32"}>
                                                    Edit
                                                </Button>
                                            </div>
                                            <div
                                                onClick={() =>
                                                    handleDeleteFpv(row.id)
                                                }
                                                className="ml-3"
                                            >
                                                <Button className={"w-32"}>
                                                    Hapus
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-10">
                            <HeaderSubText nama={"Paket FPV"} />
                            <div className="grid grid-cols-3 gap-5 mr-5 font-medium">
                                {fpv.map((row, index) => (
                                    <div
                                        className="transition-all duration-500 p-5 rounded-lg shadow-md hover:shadow-lg"
                                        key={index}
                                    >
                                        <h1 className="uppercase font-bold text-center">
                                            {row.nama}
                                        </h1>
                                        <p className="text-gray-500 text-xs mt-5 h-20 text-justify">
                                            {row.deskripsi}
                                        </p>
                                        <ul className="text-gray-500 list-inside list-disc text-xs mb-5">
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
                                        <p className="text-gray-500 text-xs text-center capitalize">
                                            Mulai dari
                                        </p>
                                        <h2 className="text-center my-3 font-bold">
                                            <FormaterRupiah
                                                number={row.harga}
                                            />
                                        </h2>
                                        <div className="mt-5 flex justify-center mx-5">
                                            <div
                                                onClick={() =>
                                                    handleEditArial(row.id)
                                                }
                                            >
                                                <Button className={"w-32"}>
                                                    Edit
                                                </Button>
                                            </div>
                                            <div
                                                onClick={() =>
                                                    handleDeleteAerial(row.id)
                                                }
                                                className="ml-3"
                                            >
                                                <Button className={"w-32"}>
                                                    Hapus
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="my-10">
                            <h1 className="font-bold mb-10">Blog</h1>
                            <div className="grid grid-cols-2 gap-5 mr-5">
                                {blogs.map((row, index) => (
                                    <div key={index} className="">
                                        <div className="mx-3 flex text-[10px] my-3 text-gray-500 capitalize">
                                            <DateFormater
                                                isoDate={row.created_at}
                                            />
                                            | {row.user.nama} | {row.nama}
                                        </div>
                                        <img
                                            src={url + row.gambar}
                                            alt=""
                                            className="w-full h-[300px] object-cover rounded-lg"
                                        />
                                        <h1 className="mx-3 font-bold my-2 capitalize">
                                            {row.nama}
                                        </h1>
                                        <p className="mx-3 text-gray-500 text-[10px] mb-3 capitalize">
                                            Oleh {row.user.nama}
                                        </p>
                                        <p className="mx-3 text-xs text-justify indent-8 font-light h-10">
                                            {row.deskripsi}
                                        </p>
                                        <div className="mt-5 px-2 text-[10px] flex justify-between items-center">
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
                                                        handleEditBlog(row.id)
                                                    }
                                                >
                                                    <Button className={"w-20"}>
                                                        Edit
                                                    </Button>
                                                </div>
                                                <div
                                                    onClick={() =>
                                                        handleDeleteBlog(row.id)
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
                                ))}
                            </div>
                        </div>
                    </div>
                    {openCreatePaket && (
                        <PopOver>
                            <div className="relative">
                                <div
                                    className="absolute top-2 right-2 z-50 "
                                    onClick={() =>
                                        setOpenCreatePaket(!openCreatePaket)
                                    }
                                >
                                    <CloseButton />
                                </div>
                                <CreatePaket />
                            </div>
                        </PopOver>
                    )}
                    {openEditAerial && (
                        <PopOver>
                            <div className="relative">
                                <div
                                    className="absolute top-2 right-2 z-50 "
                                    onClick={() =>
                                        setOpenEditAerial(!openEditAerial)
                                    }
                                >
                                    <CloseButton />
                                </div>
                                <EditPaket paket={selectedAerial} />
                            </div>
                        </PopOver>
                    )}
                    {openEditFpv && (
                        <PopOver>
                            <div className="relative">
                                <div
                                    className="absolute top-2 right-2 z-50 "
                                    onClick={() => setOpenEditFpv(!openEditFpv)}
                                >
                                    <CloseButton />
                                </div>
                                <EditPaket paket={selectedFpv} />
                            </div>
                        </PopOver>
                    )}
                    {openCreateBlog && (
                        <PopOver>
                            <div className="relative">
                                <div
                                    className="absolute top-2 right-2 z-50 "
                                    onClick={() =>
                                        setOpenCreateBlog(!openCreateBlog)
                                    }
                                >
                                    <CloseButton />
                                </div>
                                <CreateBlog />
                            </div>
                        </PopOver>
                    )}
                    {openEditBlog && (
                        <PopOver>
                            <div className="relative">
                                <div
                                    className="absolute top-2 right-2 z-50 "
                                    onClick={() =>
                                        setOpenEditBlog(!openEditBlog)
                                    }
                                >
                                    <CloseButton />
                                </div>
                                <EditBlog blog={selectedBlog} />
                            </div>
                        </PopOver>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Menu;
