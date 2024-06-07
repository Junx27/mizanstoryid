import Button from "@/Components/Backend/Button";
import Calender from "@/Components/Backend/Calender";
import Clock from "@/Components/Backend/Clock";
import CloseButton from "@/Components/Backend/CloseButton";
import ProgressBar from "@/Components/Backend/ProgressBar";
import Sidebar from "@/Components/Backend/Sidebar";
import PopOver from "@/Components/PopOver";
import { Inertia, navigate } from "@inertiajs/inertia";
import React, { useState } from "react";
import EditPofile from "./Profil/EditPofile";
import { url } from "@/Data/Url";
import { api } from "@/Data/Api";
import axios from "axios";
import ChangePassword from "./Profil/ChangePassword";

function Dashboard({ user, videos, fotos, blogs, orders, produks }) {
    const [openEditProfile, setOpenEditProfile] = useState();
    const [openChangePassword, setOpenChangePassword] = useState();
    const [selectedProfile, setSelectedProfile] = useState(null);
    const totalItemsFoto = 20;
    const completedItemsFoto = fotos.length;
    const progressFoto = (completedItemsFoto / totalItemsFoto) * 100;
    const totalItemsVideo = 10;
    const completedItemsVideo = videos.length;
    const progressVideo = (completedItemsVideo / totalItemsVideo) * 100;
    const totalItemsProduk = 6;
    const completedItemsProduk = produks.length;
    const progressProduk = (completedItemsProduk / totalItemsProduk) * 100;
    const totalItemsBlog = 200;
    const completedItemsBlog = blogs.length;
    const progressBlog = (completedItemsBlog / totalItemsBlog) * 100;
    const totalItemsOrder = 2000;
    const completedItemsOrder = orders.length;
    const progressOrder = (completedItemsOrder / totalItemsOrder) * 100;
    const foto = "Galeri foto";
    const video = "Galeri video";
    const produk = "Produk paket";
    const blog = "Blog";
    const order = "Orderan masuk";
    const handleEditProfile = async (id) => {
        try {
            const response = await axios.get(`${api}editprofile${id}`);
            setSelectedProfile(response.data);
            setOpenEditProfile(true);
        } catch (error) {
            console.error("Error fetching foto data:", error);
        }
    };
    const handleChangePassword = async (id) => {
        try {
            const response = await axios.get(`${api}editprofile${id}`);
            setSelectedProfile(response.data);
            setOpenChangePassword(true);
        } catch (error) {
            console.error("Error fetching foto data:", error);
        }
    };
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div className="pt-10 mx-5 md:pt-20 md:ml-[150px] md:mx-0">
                <h1 className="text-xs md:text-xl font-bold">
                    Selamat Datang di Dashboard Admin{" "}
                    <span className="text-blue-500 text-3xl">.</span>
                </h1>
                <div className="grid grid-cols-12 gap-0 md:gap-10">
                    <div className="col-span-12 md:col-span-4">
                        <Clock />
                        <Calender />
                    </div>
                    <div className="mt-10 md:mt-0 col-span-12 md:col-span-4 p-10 shadow-lg rounded-lg">
                        <div className="md:-mt-10">
                            <ProgressBar
                                progress={progressFoto}
                                nama={foto}
                                progressComplete={completedItemsFoto}
                                progressValue={totalItemsFoto}
                                totalProgress={progressFoto.toFixed(2)}
                            />
                        </div>
                        <div className="">
                            <ProgressBar
                                progress={progressVideo}
                                nama={video}
                                progressComplete={completedItemsVideo}
                                progressValue={totalItemsVideo}
                                totalProgress={progressVideo.toFixed(2)}
                            />
                        </div>
                        <div className="">
                            <ProgressBar
                                progress={progressProduk}
                                nama={produk}
                                progressComplete={completedItemsProduk}
                                progressValue={totalItemsProduk}
                                totalProgress={progressProduk.toFixed(2)}
                            />
                        </div>
                        <div className="">
                            <ProgressBar
                                progress={progressBlog}
                                nama={blog}
                                progressComplete={completedItemsBlog}
                                progressValue={totalItemsBlog}
                                totalProgress={progressBlog.toFixed(2)}
                            />
                        </div>
                        <div className="">
                            <ProgressBar
                                progress={progressOrder}
                                nama={order}
                                progressComplete={completedItemsOrder}
                                progressValue={totalItemsOrder}
                                totalProgress={progressOrder.toFixed(2)}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 mt-10 md:mt-0 p-5 shadow-lg rounded-lg mb-20 md:mb-0">
                        <img
                            src={url + user.gambar}
                            alt=""
                            className="w-32 h-32 mx-auto rounded-full"
                        />
                        <div className="mt-5">
                            <h1 className="font-bold text-sm md:text-xl text-center capitalize">
                                {user.nama}
                            </h1>
                            <div className="flex justify-between my-5">
                                <div className="text-sm text-center shadow p-5 rounded">
                                    <span className="material-symbols-outlined text-blue-500">
                                        smartphone
                                    </span>
                                    <p className="py-3 text-[10px] md:text-xs">
                                        {user.kontak}
                                    </p>
                                </div>
                                <div className="text-sm text-center shadow p-5 rounded">
                                    <span className="material-symbols-outlined text-purple-500">
                                        mail
                                    </span>
                                    <p className="py-3 text-[10px] md:text-xs">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <p className="text-[10px] md:text-xs text-gray-400 text-center mt-20">
                                    Copy Right &copy; 2024 Mizan Story.Id
                                    Reserved.
                                </p>
                            </div>
                            <div
                                className="mt-10 flex justify-center"
                                onClick={() => handleEditProfile(user.id)}
                            >
                                <Button className={"w-64"}>Edit</Button>
                            </div>
                            <div
                                className="mt-3 flex justify-center"
                                onClick={() => handleChangePassword(user.id)}
                            >
                                <Button className={"w-64"}>
                                    Change Password
                                </Button>
                            </div>
                        </div>
                    </div>
                    {openEditProfile && (
                        <PopOver>
                            <div className="relative">
                                <div
                                    className="absolute top-2 right-2 z-50"
                                    onClick={() =>
                                        setOpenEditProfile(!openEditProfile)
                                    }
                                >
                                    <CloseButton />
                                </div>
                                <EditPofile profile={selectedProfile} />
                            </div>
                        </PopOver>
                    )}
                    {openChangePassword && (
                        <PopOver>
                            <div className="relative">
                                <div
                                    className="absolute top-2 right-2 z-50"
                                    onClick={() =>
                                        setOpenChangePassword(
                                            !openChangePassword
                                        )
                                    }
                                >
                                    <CloseButton />
                                </div>
                                <ChangePassword profile={selectedProfile} />
                            </div>
                        </PopOver>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
