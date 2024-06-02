import Footer from "@/Components/Frontend/Footer";
import Navbar from "@/Components/Frontend/Navbar";
import React, { useEffect, useState } from "react";

function Welcome() {
    const [animasi, setAnimasi] = useState(false);
    const changePosition = () => {
        let scroll = window.scrollY;
        if (scroll > 700) {
            setAnimasi(true);
        } else {
            setAnimasi(false);
        }
    };
    useEffect(() => {
        changePosition();
        window.addEventListener("scroll", changePosition);
    });
    return (
        <div>
            <Navbar />
            <div className="w-full overflow-hidden">
                <div className="mx-5 md:mx-20">
                    <div className="relative w-full h-[250px] md:h-[600px] bg-blue-400">
                        <div className="absolute bottom-5 left-5 md:bottom-32 md:left-32 ">
                            <h1 className="font-black text-white text-[17px] md:text-5xl tracking-wide">
                                JASA SEWA DRONE
                            </h1>
                            <h1 className="mt-0 md:mt-2 font-black text-white text-[17px] md:text-5xl tracking-wide">
                                PURBALINGGA
                            </h1>
                            <p className="w-32 md:w-full text-white mt-2 text-[10px] md:text-sm md:mt-8 tracking-wide">
                                Create Your Story, Make Your Happy
                            </p>
                            <button className="mt-5 text-[10px] md:text-sm md:mt-10 bg-black p-2 px-3 text-white">
                                Contact
                            </button>
                        </div>
                        <img
                            src="hero.png"
                            alt=""
                            className="absolute -right-20 scale-100 -bottom-1 md:right-5 md:scale-125 md:bottom-12 mb-1"
                        />
                        <img
                            src="drone.png"
                            alt=""
                            className="z-30 absolute scale-[20%] top-[480px] left-32 md:scale-50 md:left-64 md:top-64 md:mt-20"
                        />
                    </div>
                </div>
                <div
                    className={`transition-all duration-1000 mx-5 md:mx-20 ${
                        animasi ? "mt-5 md:mt-12" : "mt-3 md:mt-8"
                    }`}
                >
                    <h1 className="font-bold text-sm md:text-4xl tracking-wide uppercase text-center">
                        Kebutuhan{" "}
                        <span className="text-blue-400">Foto Video Udara</span>{" "}
                        <br /> Kini Menjadi Sebuah Kewajiban
                    </h1>
                    <div className="mt-3 md:mt-20 grid grid-cols-1 md:grid-cols-2 md:gap-10 relative">
                        <div
                            className={`transition-all duration-500 border border-blue-400 p-5 md:p-12 ${
                                animasi ? "mr-0" : "-mr-2"
                            }`}
                        >
                            <img
                                src="profil.jpg"
                                alt=""
                                className="w-full h-[200px] md:h-[400px] object-cover"
                            />
                            <p className="mt-2 text-[10px] md:text-sm text-justify indent-8">
                                <span className="text-blue-400 font-bold">
                                    Mizan Story.Id
                                </span>{" "}
                                adalah layanan yang menyediakan drone untuk
                                digunakan dalam berbagai keperluan, mulai dari
                                pemotretan udara, pemetaan, survei, pengawasan,
                                hingga keperluan hiburan dan acara. Ini bisa
                                menjadi solusi yang efektif untuk mendapatkan
                                akses ke teknologi drone tanpa harus membeli
                                drone sendiri, yang bisa sangat mahal.
                            </p>
                        </div>
                        <div
                            className={`transition-all text-[10px] md:text-sm duration-500 p-5 ${
                                animasi ? "mt-0" : "-mt-2"
                            }`}
                        >
                            <h1 className="font-bold">Kegunaan Drone:</h1>
                            <ul className="list-decimal mt-2">
                                <li className="text-justify my-2">
                                    <span className="text-blue-400 font-bold">
                                        Pemotretan Udara:
                                    </span>{" "}
                                    Penggunaan drone untuk pengambilan foto dan
                                    video dari udara, yang berguna untuk proyek
                                    pemasaran, pembuatan film, dokumentasi
                                    konstruksi, atau pemantauan kegiatan luar
                                    ruangan.
                                </li>
                                <li className="text-justify my-2">
                                    <span className="text-blue-400 font-bold">
                                        Pemetaan dan Pengawasan:
                                    </span>{" "}
                                    Drone dilengkapi dengan kamera khusus dan
                                    perangkat lunak pemetaan untuk pemetaan
                                    udara, pemantauan tanah, pemantauan lalu
                                    lintas, pemantauan kebakaran hutan, atau
                                    pemantauan lingkungan.
                                </li>
                                <li className="text-justify my-2">
                                    <span className="text-blue-400 font-bold">
                                        Inspeksi dan Pengawasan Infrastruktur:
                                    </span>{" "}
                                    Penggunaan drone untuk inspeksi dan
                                    pemantauan infrastruktur seperti jembatan,
                                    jalan raya, saluran listrik, dan bangunan
                                    tinggi, yang memungkinkan untuk identifikasi
                                    kerusakan atau masalah keamanan tanpa
                                    memerlukan pemeriksaan manual.
                                </li>
                                <li className="text-justify my-2">
                                    <span className="text-blue-400 font-bold">
                                        Pelayanan Darurat:
                                    </span>{" "}
                                    Drone dapat digunakan untuk memberikan
                                    pelayanan darurat seperti pencarian dan
                                    penyelamatan, pengawasan kebakaran, atau
                                    pengiriman barang penting ke lokasi yang
                                    sulit dijangkau.
                                </li>
                                <li className="text-justify my-2">
                                    <span className="text-blue-400 font-bold">
                                        Hiburan dan Acara:
                                    </span>{" "}
                                    Penggunaan drone untuk acara hiburan seperti
                                    konser, festival, pernikahan, atau
                                    pertunjukan kembang api, untuk menciptakan
                                    efek visual yang menarik.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-56 md:mt-20 relative">
                        <h1
                            className={`transition-all duration-1000 font-bold uppercase text-sm md:text-4xl text-center absolute bg-white p-2 z-10 ${
                                animasi
                                    ? "mt-10 -right-3 md:top-64"
                                    : "mt-0 md:-top-20"
                            }`}
                        >
                            <span className="text-blue-400">Spesifikasi</span>{" "}
                            Drone <br />
                            Mizan story.id
                        </h1>
                        <img
                            src="djmavicmini.jpeg"
                            alt=""
                            className={`transition-all duration-1000 scale=100 md:scale-75 border border-black ${
                                animasi ? "-mt-[240px] md:-mt-[280px]" : "mt-0"
                            }`}
                        />
                        <div className="absolute w-full md:w-[800px] bottom-0 md:bottom-20 left-0 md:left-10">
                            <div className="bg-blue-400 w-full p-2 md:p-5 grid grid-cols-3 text-center">
                                <div>
                                    <p className="font-bold">Battery</p>
                                    <h1 className="font-bold md:text-3xl text-white">
                                        2 Hours
                                    </h1>
                                </div>
                                <div>
                                    <p className="font-bold">Quality</p>
                                    <h1 className="font-bold md:text-3xl text-white">
                                        4K
                                    </h1>
                                </div>
                                <div>
                                    <p className="font-bold">Flight Range</p>
                                    <h1 className="font-bold md:text-3xl text-white">
                                        4000 Meters
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 mb-10 md:mb-20 text-center">
                        <h1 className="font-bold text-xl md:text-4xl capitalize">
                            harga paket mulai <br />
                            <span className="text-blue-400 text-3xl md:text-5xl ml-3">
                                Rp. 750.000,00
                            </span>{" "}
                        </h1>
                        <p className="mt-5 text-[10px] text-sm">
                            Hanya di Mizan Story.Id memberikan kualitas terbaik
                            dengan harga terjangkau
                        </p>
                        <button className="bg-blue-400 text-white p-5 mt-8 md:mt-12 text-sm md:text-2xl font-bold uppercase">
                            Order Now
                        </button>
                    </div>
                    <div className="mt-0 md:mt-10 mb-5 md:mb-20 grid md:grid-cols-12 md:gap-20 p-8 md:p-10 border border-black">
                        <ul className="list-decimal mt-2 col-span-12 md:col-span-7 text-[10px] md:text-sm">
                            <h1 className="font-bold capitalize">
                                Apa yang kami tawarkan:
                            </h1>
                            <li className="text-justify my-2">
                                <span className="text-blue-400 font-bold">
                                    Bantuan teknis:
                                </span>{" "}
                                Jika Anda mengalami kesulitan dengan situs web
                                kami, aplikasi, atau alat pemesanan, tim teknis
                                kami akan membantu Anda menyelesaikan masalah
                                tersebut.
                            </li>
                            <li className="text-justify my-2">
                                <span className="text-blue-400 font-bold">
                                    Bimbingan dalam proses pemesanan:
                                </span>{" "}
                                Jika Anda membutuhkan bantuan tambahan atau
                                penjelasan tentang langkah-langkah pemesanan,
                                tim konsultasi kami akan dengan senang hati
                                membimbing Anda melalui prosesnya.
                            </li>
                            <li className="text-justify my-2">
                                <span className="text-blue-400 font-bold">
                                    Solusi untuk masalah khusus:
                                </span>{" "}
                                Jika Anda menghadapi masalah tertentu atau
                                memiliki kebutuhan khusus yang tidak terpenuhi,
                                kami akan bekerja sama dengan Anda untuk
                                menemukan solusi terbaik.
                            </li>
                        </ul>
                        <ul className="list-decimal mt-2 col-span-12 md:col-span-5 text-[10px] md:text-sm">
                            <h1 className="font-bold capitalize">
                                bagaimana cara memesan?
                            </h1>
                            <li className="text-justify my-2">
                                Pilih paket pada menu price list{" "}
                                <a href="/price" className="text-blue-400">
                                    disini!.
                                </a>
                            </li>
                            <li className="text-justify my-2">
                                Cari kebutuhan jasa sewa dengan harga paket
                                tertentu.
                            </li>
                            <li className="text-justify my-2">
                                Tekan pilih dan akan diarahkan ke Whatsapp Mizan
                                Story.Id.
                            </li>
                            <li className="text-justify my-2">
                                Selsaikan konfirmasi pesanan melalui kontak dan
                                formulir tersebut.
                            </li>
                            <li className="text-justify my-2">
                                Jika ada kendala silahkan hubungi Mizan Story.Id{" "}
                                <a href="/about" className="text-blue-400">
                                    disini!.
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-0 md:mt-20 text-center mb-10 md:mb-20">
                        <h1 className="font-bold uppercase text-xl md:text-4xl text-center bg-white p-2 z-10">
                            <span className="text-blue-400">Skill pilot</span>{" "}
                            Drone <br />
                            Mizan story.id
                        </h1>
                        <div className="flex justify-center mt-10 h-full md:h-[300px]">
                            <div className="w-full md:p-5 grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10 text-center items-center">
                                <div>
                                    <p className="font-bold">Pilot</p>
                                    <h1 className="bg-blue-400 font-bold text-sm md:text-xl text-white mt-5 border border-white uppercase p-3">
                                        High Control
                                    </h1>
                                    <p className="mt-5 text-gray-500 text-xs">
                                        Pilot berpengalaman dan terpercaya,
                                        menguasai berbagai medan.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-bold">
                                        Quality Asurance
                                    </p>
                                    <h1 className="bg-blue-400 font-bold text-sm md:text-xl text-white mt-5 border border-white uppercase p-3">
                                        High Level
                                    </h1>
                                    <p className="mt-5 text-gray-500 text-xs">
                                        Memberikan pelayanan yang ramah dan
                                        cepat tanggap terhadap respon klien.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-bold">Type</p>
                                    <h1 className="bg-blue-400 font-bold text-sm md:text-xl text-white mt-5 border border-white uppercase p-3">
                                        Aerial/FPV
                                    </h1>
                                    <p className="mt-5 text-gray-500 text-xs">
                                        Handal mengoperasikan di berbagai tipe
                                        seperti aerial dan FPV.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-bold">Flight</p>
                                    <h1 className="bg-blue-400 font-bold text-sm md:text-xl text-white mt-5 border border-white uppercase p-3">
                                        Best Savety
                                    </h1>
                                    <p className="mt-5 text-gray-500 text-xs">
                                        Mengutamakan keamanan akan properti di
                                        sekitar projek klien.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Welcome;
