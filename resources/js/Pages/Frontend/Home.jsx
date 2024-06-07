import Button from "@/Components/Backend/Button";
import SidebarKonsumen from "@/Components/Frontend/SidebarUser";
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
        <div className="overflow-hidden">
            <SidebarKonsumen />
            <div className="md:pl-[250px] md:pt-64 grid grid-cols-2 px-5 pt-20 md:px-32 bg-gray-50">
                <div>
                    <h1 className="font-bold text-[10px] md:text-xl mt-10">
                        Jasa Sewa Drone di Purbalingga
                    </h1>
                    <p className="text-[8px] md:text-[10px] text-gray-500 mt-5">
                        Create Your Story, Make Your Happy
                    </p>
                    <div className="mt-2 md:mt-5">
                        <a href="/price">
                            <Button>Order NOW!</Button>
                        </a>
                    </div>
                </div>
                <div>
                    <img src="fpv.png" alt="" className="mr-10 scale-125" />
                </div>
            </div>
            <div className="mx-5 md:mx-0 mt-12 md:ml-[150px] md:mb-64 md:mt-20">
                <div className="">
                    <h1 className="font-bold text-xl md:text-3xl text-center">
                        Selamat Datang di Mizan Story.Id
                    </h1>
                    <p className="text-gray-500 mt-5 text-[8px] md:text-[10px] text-center mx-4 md:mx-64">
                        Mizan Story.Id adalah layanan yang menyediakan drone
                        untuk digunakan dalam berbagai keperluan, mulai dari
                        pemotretan udara, pemetaan, survei, pengawasan, hingga
                        keperluan hiburan dan acara. Ini bisa menjadi solusi
                        yang efektif untuk mendapatkan akses ke teknologi drone
                        tanpa harus membeli drone sendiri, yang bisa sangat
                        mahal.
                    </p>
                </div>
                <div className="mt-2 md:mt-5">
                    <div className="text-center">
                        <Button className={"w-32 mx-5"}>Branding</Button>
                        <Button className={"w-32 mx-5"}>Promosi</Button>
                        <Button className={"w-32 mx-5"}>Dokumentasi</Button>
                        <Button className={"w-32 mx-5"}>Momentum</Button>
                    </div>
                    <div className="mt-5 md:mt-20 relative flex flex-col md:flex-row md:justify-between items-center md:mx-64">
                        <div className="md:ml-10">
                            <h1 className="font-bold text-xs">Branding</h1>
                            <p className="text-[10px] mt-3 md:w-64 indent-8 text-justify mx-2">
                                "Bangun branding bisnismu dengan konten yang
                                menarik dan berdaya ungkit. Konten yang
                                berkualitas dan menarik tidak hanya memperkuat
                                kesan merek Anda di mata pelanggan, tetapi juga
                                membantu menarik perhatian target audiens Anda.
                                Dengan fokus pada pembuatan konten yang kreatif,
                                informatif, dan berarti, Anda dapat membangun
                                hubungan yang kuat dengan pelanggan dan
                                membedakan bisnismu dari pesaing."
                            </p>
                        </div>
                        <div className="order-first md:order-last mb-5">
                            <img
                                src="branding.png"
                                alt=""
                                className="w-[200px] md:w-64 shadow p-5 rounded-lg"
                            />
                            <img
                                src="fpv2.png"
                                alt=""
                                className="absolute scale-[40%] -top-10 right-32 md:right-10 shadow-lg rounded-[20px] p-2"
                            />
                        </div>
                    </div>
                    <div className="relative mt-20 md:mt-32 flex flex-col md:flex-row md:justify-between items-center mx-32">
                        <img
                            src="promosi.png"
                            alt=""
                            className="scale-[200%] md:scale-100 md:w-96"
                        />
                        <div className="md:ml-20 bg-white w-[400px] md:w-[500px] p-10 pb-20 shadow-lg rounded-lg">
                            <h1 className="font-bold text-xs">Promosi</h1>
                            <p className="text-[10px] mt-3 indent-8 text-justify">
                                "Promosikan bisnismu dengan media digital dan
                                jangkau pasar yang luas. Dengan strategi
                                pemasaran digital yang efektif, bisnismu dapat
                                menjangkau lebih banyak pelanggan potensial,
                                memperluas cakupan pasar, dan meningkatkan
                                kesadaran merek secara signifikan. Jangan
                                lewatkan peluang untuk menonjol di era digital
                                ini dan tingkatkan visibilitas bisnismu hari
                                ini!"
                            </p>
                            <h1 className="font-bold text-xs mt-10">
                                Dokumentasi
                            </h1>
                            <p className="text-[10px] mt-3 indent-8 text-justify">
                                "Dokumentasi penting untuk berbagai keperluan
                                seperti bisnis, kenangan, dan promosi. Dengan
                                dokumentasi yang terperinci, Anda dapat
                                mengabadikan momen penting dalam bisnis Anda,
                                membuat kenangan yang tak terlupakan, dan
                                mempromosikan produk atau layanan Anda dengan
                                lebih efektif. Jangan biarkan momen berharga
                                lewat begitu saja, mulailah dokumentasikan
                                sekarang untuk mendukung kesuksesan Anda di masa
                                depan!"
                            </p>
                            <h1 className="font-bold text-xs mt-10">
                                Momentum
                            </h1>
                            <p className="text-[10px] mt-3 indent-8 text-justify">
                                "Setiap kenangan memiliki arti dalam kehidupan,
                                dan abadikan momentum Anda bersama kami. Kami
                                memahami betapa berharganya momen-momen istimewa
                                dalam hidup Anda, dan kami berkomitmen untuk
                                membantu Anda mengabadikan kenangan tersebut
                                dengan sempurna. Dari momen kecil hingga momen
                                besar, kami siap membantu Anda menjaga setiap
                                detik berharga agar selalu dikenang."
                            </p>
                        </div>
                        <div className="absolute bg-white top-12 md:top-[65%] left-2 md:left-32 p-5 md:pb-10 shadow-lg rounded-lg">
                            <p className="text-[10px] w-[200px] md:w-64">
                                Dokumentasikan momentum berharga kamu bersama
                                Mizan Story.Id
                            </p>
                        </div>
                    </div>
                    <div className="z-10 relative md:mx-64 bg-white mt-10 md:mt-32 mb-32">
                        <h1 className="font-bold text-center">Bersama Kami</h1>
                        <div className="text-[10px] p-10 md:px-32 shadow-lg rounded-lg">
                            <div className="my-10 text-center shadow p-5 rounded-lg">
                                <h1 className="font-bold text-xs">
                                    Bantuan Teknis
                                </h1>
                                <p className="mt-5">
                                    Jika Anda mengalami kesulitan dengan situs
                                    web kami, aplikasi, atau alat pemesanan, tim
                                    teknis kami akan membantu Anda menyelesaikan
                                    masalah tersebut.
                                </p>
                            </div>
                            <div className="my-10 text-center shadow p-5 rounded-lg">
                                <h1 className="font-bold text-xs">
                                    Bimbingan dalam proses pemesanan
                                </h1>
                                <p className="mt-5">
                                    Jika Anda membutuhkan bantuan tambahan atau
                                    penjelasan tentang langkah-langkah
                                    pemesanan, tim konsultasi kami akan dengan
                                    senang hati membimbing Anda melalui
                                    prosesnya.
                                </p>
                            </div>
                            <div className="my-10 text-center shadow p-5 rounded-lg">
                                <h1 className="font-bold text-xs">
                                    Solusi untuk masalah khusus
                                </h1>
                                <p className="mt-5 pb-20">
                                    Jika Anda menghadapi masalah tertentu atau
                                    memiliki kebutuhan khusus yang tidak
                                    terpenuhi, kami akan bekerja sama dengan
                                    Anda untuk menemukan solusi terbaik.
                                </p>
                                <a href="/price">
                                    <Button className={"w-32 text-sm"}>
                                        Order NOW!
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="z-0 bg-gray-50 h-[300px] -mt-[400px]"></div>
        </div>
    );
}

export default Welcome;
