import Calender from "@/Components/Backend/Calender";
import Clock from "@/Components/Backend/Clock";
import ProgressBar from "@/Components/Backend/ProgressBar";
import Sidebar from "@/Components/Backend/Sidebar";
import { Inertia, navigate } from "@inertiajs/inertia";
import React from "react";

function Dashboard() {
    const totalItemsFoto = 20;
    const completedItemsFoto = 7;
    const progressFoto = (completedItemsFoto / totalItemsFoto) * 100;
    const totalItemsVideo = 10;
    const completedItemsVideo = 7;
    const progressVideo = (completedItemsVideo / totalItemsVideo) * 100;
    const totalItemsOrder = 2000;
    const completedItemsOrder = 76;
    const progressOrder = (completedItemsOrder / totalItemsOrder) * 100;
    const foto = "Galeri foto";
    const video = "Galeri video";
    const order = "Orderan masuk";
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div className="pt-20 ml-[150px]">
                <h1 className="text-xl font-bold">
                    Selamat Datang di Dashboard Admin{" "}
                    <span className="text-blue-500 text-3xl">.</span>
                </h1>
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-4">
                        <Clock />
                        <Calender />
                    </div>
                    <div className="col-span-4 p-10 shadow-lg rounded-lg">
                        <h1 className="font-bold mt-10">Penggunaan memori:</h1>
                        <div className="my-3">
                            <ProgressBar
                                progress={progressFoto}
                                nama={foto}
                                progressComplete={completedItemsFoto}
                                progressValue={totalItemsFoto}
                                totalProgress={progressFoto}
                            />
                        </div>
                        <div className="my-3">
                            <ProgressBar
                                progress={progressVideo}
                                nama={video}
                                progressComplete={completedItemsVideo}
                                progressValue={totalItemsVideo}
                                totalProgress={progressVideo}
                            />
                        </div>
                        <div className="my-3">
                            <ProgressBar
                                progress={progressOrder}
                                nama={order}
                                progressComplete={completedItemsOrder}
                                progressValue={totalItemsOrder}
                                totalProgress={progressOrder}
                            />
                        </div>
                    </div>
                    <div className="col-span-4 p-5 shadow-lg rounded-lg">
                        <img
                            src="avatar_16.jpg"
                            alt=""
                            className="w-32 h-32 mx-auto rounded-full"
                        />
                        <div className="mt-5">
                            <h1 className="font-bold text-xl text-center">
                                Admin
                            </h1>
                            <div className="flex justify-between my-5">
                                <div className="text-sm text-center shadow p-5">
                                    <span className="material-symbols-outlined text-blue-500">
                                        smartphone
                                    </span>
                                    <p className="py-3">081217114742</p>
                                </div>
                                <div className="text-sm text-center shadow p-5">
                                    <span className="material-symbols-outlined text-purple-500">
                                        mail
                                    </span>
                                    <p className="py-3">junx@gmail.com</p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <p className="text-xs text-gray-400 text-center mt-20">
                                    Copy Right &copy; 2024 Mizan Story.Id
                                    Reserved.
                                </p>
                            </div>
                            <div className="mt-20 flex justify-end text-xs">
                                <button className="p-2 w-32 shadow bg-black text-white rounded-lg">
                                    edit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
