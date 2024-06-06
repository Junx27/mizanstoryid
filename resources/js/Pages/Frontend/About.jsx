import Button from "@/Components/Backend/Button";
import SidebarKonsumen from "@/Components/Frontend/SidebarUser";
import { url } from "@/Data/Url";
import React from "react";

function About({ user }) {
    return (
        <div>
            <SidebarKonsumen />
            <div className="relative ml-[150px] pt-32">
                <div className="flex justify-between mx-10 p-10 rounded-lg shadow-lg">
                    <div>
                        <h1 className="font-bold">About</h1>
                        <p className="mt-5 text-gray-500 text-[10px]">
                            Abadikan setiap momen kamu bersama Mizan Story.Id
                        </p>
                        <p className="mt-5 w-96 text-[10px] text-justify indent-8">
                            Mizan Story.Id adalah layanan yang menyediakan drone
                            untuk digunakan dalam berbagai keperluan, mulai dari
                            pemotretan udara, pemetaan, survei, pengawasan,
                            hingga keperluan hiburan dan acara. Ini bisa menjadi
                            solusi yang efektif untuk mendapatkan akses ke
                            teknologi drone tanpa harus membeli drone sendiri,
                            yang bisa sangat mahal.
                        </p>
                        <div className="flex justify-between mt-20">
                            <div className="font-bold text-xs w-full text-center mx-2">
                                <Button>Berkualitas</Button>
                            </div>
                            <div className="font-bold text-xs w-full text-center mx-2">
                                <Button>Profesional</Button>
                            </div>
                            <div className="font-bold text-xs w-full text-center mx-2">
                                <Button>Terpercaya</Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] shadow-lg p-10 rounded-lg absolute backdrop-blur-sm bg-white/90 right-64">
                        <img
                            src={url + user[0].gambar}
                            alt=""
                            className="w-32 h-32 rounded-full mx-auto z-40"
                        />
                        <h1 className="font-bold capitalize mt-5 text-center">
                            {user[0].nama}
                        </h1>
                        <div className="mt-5 flex flex-col items-center text-[10px]">
                            <p className="text-gray-500">
                                Email: {user[0].email}
                            </p>
                            <p className="text-gray-500 mt-2">
                                Kontak: {user[0].kontak}
                            </p>
                        </div>
                        <div className="mt-10 text-center">
                            <a href="/">
                                <Button>Call Whatsapp</Button>
                            </a>
                        </div>
                    </div>
                    <img src="fpv.png" alt="" className="w-[600px] pb-32" />
                </div>
            </div>
            <img src="fpv2.png" alt="" className="w-64 -mt-[180px] ml-20" />
        </div>
    );
}

export default About;
