import React from "react";

function Galeri() {
    return (
        <div>
            <div className="mb-10 mx-5 md:mb-20 md:mx-20">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-9 w-full h-[300px] md:h-[500px] mr-5">
                        <video
                            src="videohero.mp4"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            autoPlay
                            muted
                            loop
                        ></video>
                        <h1 className="font-bold mt-2 md:mt-5 text-sm md:text-xl">
                            Universitas Perwira Purbalingga
                        </h1>
                        <p className="mt-2 text-gray-400 text-xs">
                            Deskripsi mengenai video yang diupload diatas
                        </p>
                        <div className="mt-3 text-[10px] text-xs flex items-center">
                            <div className="flex">
                                <span class="material-symbols-outlined text-[10px] md:text-xs text-gray-500">
                                    visibility
                                </span>
                                <p className="ml-3 text-gray-500">1.2k Views</p>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div className="hidden md:block">
                            <h1 className="font-bold uppercase mb-5">
                                Galeri Foto
                            </h1>
                            <div className="grid md:grid-cols-3 gap-10">
                                <div>
                                    <img
                                        src="profil.jpg"
                                        alt=""
                                        className="transition-all duration-1000 w-full h-[350px] object-cover brightness-90 hover:brightness-100"
                                    />
                                    <h1 className="font-bold mt-2">
                                        Bukit Wonosobo
                                    </h1>
                                    <p className="mt-2 text-gray-400 text-xs">
                                        Deskripsi mengenai video yang diupload
                                        diatas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-3 w-full mx-0 md:mx-10 mt-32 md:mt-0">
                        <h1 className="font-bold uppercase">Video</h1>
                        <div className="mt-5">
                            <div>
                                <video
                                    src="videohero.mp4"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                ></video>
                                <h1 className="font-bold mt-2">
                                    Alun-alun Purbalingga
                                </h1>
                                <p className="mt-2 text-gray-400 text-xs">
                                    Deskripsi mengenai video yang diupload
                                    diatas
                                </p>
                                <div className="mt-3 text-xs flex justify-between items-center">
                                    <div className="flex">
                                        <span class="material-symbols-outlined text-xs text-gray-500">
                                            visibility
                                        </span>
                                        <p className="ml-3 text-gray-500">
                                            1.2k Views
                                        </p>
                                    </div>
                                    <div>
                                        <span class="material-symbols-outlined text-[#92bef7]">
                                            stacked_bar_chart
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div>
                                <img
                                    src="profil.jpg"
                                    alt=""
                                    className="w-full h-[200px] object-cover"
                                />
                                <h1 className="font-bold mt-2">
                                    Alun-alun Purbalingga
                                </h1>
                                <p className="mt-2 text-gray-400 text-xs">
                                    Deskripsi mengenai video yang diupload
                                    diatas
                                </p>
                                <div className="mt-3 text-xs flex justify-between items-center">
                                    <div className="flex">
                                        <span class="material-symbols-outlined text-xs text-gray-500">
                                            visibility
                                        </span>
                                        <p className="ml-3 text-gray-500">
                                            1.2k Views
                                        </p>
                                    </div>
                                    <div>
                                        <span class="material-symbols-outlined text-[#92bef7]">
                                            play_circle
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div>
                                <img
                                    src="profil.jpg"
                                    alt=""
                                    className="w-full h-[200px] object-cover"
                                />
                                <h1 className="font-bold mt-2">
                                    Alun-alun Purbalingga
                                </h1>
                                <p className="mt-2 text-gray-400 text-xs">
                                    Deskripsi mengenai video yang diupload
                                    diatas
                                </p>
                                <div className="mt-3 text-xs flex justify-between items-center">
                                    <div className="flex">
                                        <span class="material-symbols-outlined text-xs text-gray-500">
                                            visibility
                                        </span>
                                        <p className="ml-3 text-gray-500">
                                            1.2k Views
                                        </p>
                                    </div>
                                    <div>
                                        <span class="material-symbols-outlined text-[#92bef7]">
                                            play_circle
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div>
                                <img
                                    src="profil.jpg"
                                    alt=""
                                    className="w-full h-[200px] object-cover"
                                />
                                <h1 className="font-bold mt-2">
                                    Alun-alun Purbalingga
                                </h1>
                                <p className="mt-2 text-gray-400 text-xs">
                                    Deskripsi mengenai video yang diupload
                                    diatas
                                </p>
                                <div className="mt-3 text-xs flex justify-between items-center">
                                    <div className="flex">
                                        <span class="material-symbols-outlined text-xs text-gray-500">
                                            visibility
                                        </span>
                                        <p className="ml-3 text-gray-500">
                                            1.2k Views
                                        </p>
                                    </div>
                                    <div>
                                        <span class="material-symbols-outlined text-[#92bef7]">
                                            play_circle
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div>
                                <img
                                    src="profil.jpg"
                                    alt=""
                                    className="w-full h-[200px] object-cover"
                                />
                                <h1 className="font-bold mt-2">
                                    Alun-alun Purbalingga
                                </h1>
                                <p className="mt-2 text-gray-400 text-xs">
                                    Deskripsi mengenai video yang diupload
                                    diatas
                                </p>
                                <div className="mt-3 text-xs flex justify-between items-center">
                                    <div className="flex">
                                        <span class="material-symbols-outlined text-xs text-gray-500">
                                            visibility
                                        </span>
                                        <p className="ml-3 text-gray-500">
                                            1.2k Views
                                        </p>
                                    </div>
                                    <div>
                                        <span class="material-symbols-outlined text-[#92bef7]">
                                            play_circle
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden block mx-5 mb-20">
                <h1 className="font-bold uppercase mb-5">Galeri Foto</h1>
                <div className="grid md:grid-cols-3 gap-10">
                    <div>
                        <img
                            src="profil.jpg"
                            alt=""
                            className="transition-all duration-1000 w-full h-[350px] object-cover brightness-90 hover:brightness-100"
                        />
                        <h1 className="font-bold mt-2">Bukit Wonosobo</h1>
                        <p className="mt-2 text-gray-400 text-xs">
                            Deskripsi mengenai video yang diupload diatas
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Galeri;