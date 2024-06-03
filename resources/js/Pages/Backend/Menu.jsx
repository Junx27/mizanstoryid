import ProgressBar from "@/Components/Backend/ProgressBar";
import Sidebar from "@/Components/Backend/Sidebar";
import React from "react";

function Menu() {
    const totalItemsFoto = 20;
    const completedItemsFoto = 7;
    const progressFoto = (completedItemsFoto / totalItemsFoto) * 100;
    const totalItemsVideo = 10;
    const completedItemsVideo = 7;
    const progressVideo = (completedItemsVideo / totalItemsVideo) * 100;
    const totalItemsOrder = 2000;
    const completedItemsOrder = 76;
    const progressOrder = (completedItemsOrder / totalItemsOrder) * 100;
    const foto = "Paket AERIAL";
    const video = "Paket FPV";
    const order = "Blog";
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div className="font-bold ml-[150px] pt-20">
                <div className="flex">
                    <div className="fixed w-[300px] p-10 shadow-lg rounded-lg">
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
                        <div className="mt-10 flex justify-center text-xs">
                            <button className="p-2 w-full shadow bg-black text-white rounded-lg">
                                Tambah paket
                            </button>
                        </div>
                        <div className="mt-5 flex justify-center text-xs">
                            <button className="p-2 w-full shadow bg-black text-white rounded-lg">
                                Tambah blog
                            </button>
                        </div>
                    </div>
                    <div className="ml-[350px]">
                        <h1 className="text-xl font-bold mb-10">
                            Paket AERIAL
                        </h1>
                        <div className="grid grid-cols-3 gap-5 mr-5 font-medium">
                            <div className="p-5 rounded-lg shadow-lg">
                                <h1
                                    className={`transition-all duration-300 text-center font-bold uppercase`}
                                >
                                    paket bronze
                                </h1>
                                <p
                                    className={`transition-all duration-300 mt-5 md:mt-7 text-justify text-xs `}
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
                                    className={`transition-all duration-300 list-disc list-inside text-xs `}
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
                                    className={`transition-all duration-300 my-2 text-center text-xs `}
                                >
                                    Mulai dari
                                </p>
                                <h2
                                    className={`transition-all duration-300 my-2 text-center font-bold`}
                                >
                                    Rp.750.000,00
                                </h2>
                                <button
                                    className={`transition-all duration-300 p-2 w-full font-bold text-xs md:text-sm bg-black text-white rounded-lg`}
                                >
                                    Edit
                                </button>
                            </div>
                            <div className="p-5 rounded-lg shadow-lg">
                                <h1
                                    className={`transition-all duration-300 text-center font-bold uppercase`}
                                >
                                    paket bronze
                                </h1>
                                <p
                                    className={`transition-all duration-300 mt-5 md:mt-7 text-justify text-xs `}
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
                                    className={`transition-all duration-300 list-disc list-inside text-xs `}
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
                                    className={`transition-all duration-300 my-2 text-center text-xs `}
                                >
                                    Mulai dari
                                </p>
                                <h2
                                    className={`transition-all duration-300 my-2 text-center font-bold`}
                                >
                                    Rp.750.000,00
                                </h2>
                                <button
                                    className={`transition-all duration-300 p-2 w-full font-bold text-xs md:text-sm bg-black text-white rounded-lg`}
                                >
                                    Edit
                                </button>
                            </div>
                            <div className="p-5 rounded-lg shadow-lg">
                                <h1
                                    className={`transition-all duration-300 text-center font-bold uppercase`}
                                >
                                    paket bronze
                                </h1>
                                <p
                                    className={`transition-all duration-300 mt-5 md:mt-7 text-justify text-xs `}
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
                                    className={`transition-all duration-300 list-disc list-inside text-xs `}
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
                                    className={`transition-all duration-300 my-2 text-center text-xs `}
                                >
                                    Mulai dari
                                </p>
                                <h2
                                    className={`transition-all duration-300 my-2 text-center font-bold`}
                                >
                                    Rp.750.000,00
                                </h2>
                                <button
                                    className={`transition-all duration-300 p-2 w-full font-bold text-xs md:text-sm bg-black text-white rounded-lg`}
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                        <h1 className="text-xl font-bold my-10">Paket FPV</h1>
                        <div className="grid grid-cols-3 gap-5 mr-5 font-medium">
                            <div className="p-5 rounded-lg shadow-lg">
                                <h1
                                    className={`transition-all duration-300 text-center font-bold uppercase`}
                                >
                                    paket bronze
                                </h1>
                                <p
                                    className={`transition-all duration-300 mt-5 md:mt-7 text-justify text-xs `}
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
                                    className={`transition-all duration-300 list-disc list-inside text-xs `}
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
                                    className={`transition-all duration-300 my-2 text-center text-xs `}
                                >
                                    Mulai dari
                                </p>
                                <h2
                                    className={`transition-all duration-300 my-2 text-center font-bold`}
                                >
                                    Rp.750.000,00
                                </h2>
                                <button
                                    className={`transition-all duration-300 p-2 w-full font-bold text-xs md:text-sm bg-black text-white rounded-lg`}
                                >
                                    Edit
                                </button>
                            </div>
                            <div className="p-5 rounded-lg shadow-lg">
                                <h1
                                    className={`transition-all duration-300 text-center font-bold uppercase`}
                                >
                                    paket bronze
                                </h1>
                                <p
                                    className={`transition-all duration-300 mt-5 md:mt-7 text-justify text-xs `}
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
                                    className={`transition-all duration-300 list-disc list-inside text-xs `}
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
                                    className={`transition-all duration-300 my-2 text-center text-xs `}
                                >
                                    Mulai dari
                                </p>
                                <h2
                                    className={`transition-all duration-300 my-2 text-center font-bold`}
                                >
                                    Rp.750.000,00
                                </h2>
                                <button
                                    className={`transition-all duration-300 p-2 w-full font-bold text-xs md:text-sm bg-black text-white rounded-lg`}
                                >
                                    Edit
                                </button>
                            </div>
                            <div className="p-5 rounded-lg shadow-lg">
                                <h1
                                    className={`transition-all duration-300 text-center font-bold uppercase`}
                                >
                                    paket bronze
                                </h1>
                                <p
                                    className={`transition-all duration-300 mt-5 md:mt-7 text-justify text-xs `}
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
                                    className={`transition-all duration-300 list-disc list-inside text-xs `}
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
                                    className={`transition-all duration-300 my-2 text-center text-xs `}
                                >
                                    Mulai dari
                                </p>
                                <h2
                                    className={`transition-all duration-300 my-2 text-center font-bold`}
                                >
                                    Rp.750.000,00
                                </h2>
                                <button
                                    className={`transition-all duration-300 p-2 w-full font-bold text-xs md:text-sm bg-black text-white rounded-lg`}
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className="my-10">
                            <h1 className="font-bold text-xl mb-10">Blog</h1>
                            <div className="grid grid-cols-2 gap-5 mr-5">
                                <div className="mr-5 font-medium p-5 shadow-lg rounded-lg">
                                    <div className="">
                                        <p className="text-gray-500 text-xs mb-3">
                                            {" "}
                                            25 Mei 2024 | 15.00 WIB |
                                            Purbalingga | Alun-alun Purbalingga.
                                        </p>
                                        <img
                                            src="profil.jpg"
                                            alt=""
                                            className="w-full h-[300px] object-cover rounded-lg"
                                        />
                                        <h1 className="font-bold my-2 text-xl">
                                            Alun-alun Purbalingga
                                        </h1>
                                        <p className="text-gray-500 text-xs mb-3">
                                            Oleh Mizan Story.id
                                        </p>
                                        <p className="text-xs text-justify indent-8 font-light">
                                            Alun-alun Purbalingga adalah sebuah
                                            ruang terbuka yang menjadi pusat
                                            kegiatan sosial, budaya, dan ekonomi
                                            di Kota Purbalingga, Jawa Tengah,
                                            Indonesia. Sebagai salah satu
                                            alun-alun yang terkenal di wilayah
                                            tersebut, Alun-alun Purbalingga
                                            sering menjadi tempat berkumpulnya
                                            masyarakat setempat untuk berbagai
                                            kegiatan seperti olahraga, seni dan
                                            budaya, serta perayaan acara
                                            tertentu.
                                        </p>
                                        <a href="/editfoto">
                                            <button
                                                className={`my-5 transition-all duration-300 p-2 w-full font-bold text-xs md:text-sm bg-black text-white rounded-lg`}
                                            >
                                                Edit
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
