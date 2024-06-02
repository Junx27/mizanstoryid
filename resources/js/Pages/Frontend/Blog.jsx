import Footer from "@/Components/Frontend/Footer";
import Navbar from "@/Components/Frontend/Navbar";
import React, { useState } from "react";

function Blog() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Navbar />
            <div className="mx-5 md:mx-20 my-10">
                <div className="grid grid-cols-12 gap-0 md:gap-10">
                    <div className="col-span-12 md:col-span-10">
                        <div className="">
                            <p className="text-gray-500 text-xs mb-3">
                                {" "}
                                25 Mei 2024 | 15.00 WIB | Purbalingga |
                                Alun-alun Purbalingga.
                            </p>
                            <img
                                src="profil.jpg"
                                alt=""
                                className="w-full h-[300px] md:h-[600px] object-cover"
                            />
                            <h1 className="font-bold my-4 text-xl md:text-2xl">
                                Alun-alun Purbalingga
                            </h1>
                            <p className="text-gray-500 text-[10px] md:text-xs my-3">
                                Oleh Mizan Story.id
                            </p>
                            <p className="text-xs md:text-sm text-justify indent-8">
                                Alun-alun Purbalingga adalah sebuah ruang
                                terbuka yang menjadi pusat kegiatan sosial,
                                budaya, dan ekonomi di Kota Purbalingga, Jawa
                                Tengah, Indonesia. Sebagai salah satu alun-alun
                                yang terkenal di wilayah tersebut, Alun-alun
                                Purbalingga sering menjadi tempat berkumpulnya
                                masyarakat setempat untuk berbagai kegiatan
                                seperti olahraga, seni dan budaya, serta
                                perayaan acara tertentu. Alun-alun ini biasanya
                                dikelilingi oleh bangunan-bangunan penting
                                seperti kantor pemerintahan, masjid, atau
                                tempat-tempat ibadah lainnya. Selain itu, di
                                sekitar alun-alun sering terdapat pedagang kaki
                                lima yang menjajakan berbagai jenis makanan dan
                                minuman, serta barang-barang kerajinan dan
                                souvenir. Alun-alun Purbalingga juga sering
                                digunakan untuk acara-acara kota seperti pasar
                                malam, festival budaya, konser musik, dan
                                kegiatan serupa lainnya. Tempat ini menjadi
                                pusat kehidupan sosial dan budaya di kota
                                tersebut, yang menjadikannya ikonik dan berharga
                                bagi penduduk setempat serta pengunjung dari
                                luar kota.
                            </p>
                            <div className="relative flex justify-end">
                                <button
                                    className="transition-all duration-500 z-10 mt-20 bg-black p-2 text-white pl-3 hover:pl-2 text-xs md:text-sm"
                                    onMouseEnter={() => setOpen(true)}
                                    onMouseLeave={() => setOpen(false)}
                                >
                                    Selanjutnya
                                </button>
                                <button
                                    className={`z-0 h-8 md:h-10 transition-all duration-500 absolute mt-20 bg-blue-400 p-2  ${
                                        open ? "w-[100px] md:w-32" : "w-0"
                                    }`}
                                ></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-2 my-10 md:my-0">
                        <h1 className="font-bold">Daftar Blog:</h1>
                        <ul className="list-disc list-inside">
                            <li className="text-blue-400 my-2 caplitalize text-sm truncate">
                                festival balon wonosobo
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;
