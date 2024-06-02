import Footer from "@/Components/Frontend/Footer";
import Navbar from "@/Components/Frontend/Navbar";
import React from "react";

function About() {
    return (
        <div>
            <Navbar />
            <div className="m-5 md:m-20">
                <div className="grid grid-col-1 md:grid-cols-12 gap-10">
                    <div className="col-span-8 mt-5 md:mt-10">
                        <h1 className="font-bold text-xl md:text-4xl">About</h1>
                        <p className="text-gray-500 mt-3 md:mt-8 mb-3 text-[10px] md:text-xs">
                            Abadikan momen berhargamu bersama Mizan Story.Id
                        </p>
                        <p className="text-justify text-xs md:text-sm">
                            Video drone adalah rekaman video yang diambil
                            menggunakan pesawat tanpa awak (drone) yang
                            dilengkapi dengan kamera. Drone dapat mengambil
                            gambar dari udara dengan sudut pandang yang
                            berbeda-beda, memberikan perspektif yang unik dan
                            menakjubkan.
                        </p>
                        <p className="mt-5 text-justify text-xs md:text-sm">
                            <span className="text-[#92bef7] font-bold">
                                Mizan Story.Id
                            </span>{" "}
                            adalah layanan yang menyediakan drone untuk
                            digunakan dalam berbagai keperluan, mulai dari
                            pemotretan udara, pemetaan, survei, pengawasan,
                            hingga keperluan hiburan dan acara. Ini bisa menjadi
                            solusi yang efektif untuk mendapatkan akses ke
                            teknologi drone tanpa harus membeli drone sendiri,
                            yang bisa sangat mahal.
                        </p>
                        <div className="mt-8 md:mt-12">
                            <h1 className="font-bold text-xl md:text-4xl">
                                Kontak
                            </h1>
                            <div className="text-xs md:text-sm flex flex-col md:flex-row gap-3 md:gap-10 mt-5 md:mt-10">
                                <div className="flex items-center">
                                    <span class="material-symbols-outlined">
                                        mail
                                    </span>
                                    <p className="ml-3 text-[#92bef7]">
                                        Mizanekaputra11@gmail.com
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <span class="material-symbols-outlined">
                                        phone
                                    </span>
                                    <p className="ml-3 text-[#92bef7]">
                                        +62 813-2690-3289
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <span class="material-symbols-outlined">
                                        travel_explore
                                    </span>
                                    <p className="ml-3 text-[#92bef7]">
                                        @mizanstory.id
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-9 md:col-span-4 md:mx-auto">
                        <img
                            src="profil.jpg"
                            alt=""
                            className="w-full h-[500px] object-cover"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
                    <div className="border border-black w-full h-full text-center p-5 md:p-10 pb-12 md:pb-20">
                        <h1 className="font-bold text-xl md:text-3xl mt-5">
                            Berkualitas
                        </h1>
                        <p className="indent-8 mt-5 text-xs md:text-sm text-justify text-gray-500">
                            Memberikan hasil pengambilan foto/video drone
                            berkualitas terbaik adalah komitmen kami. Kami
                            menerapkan teknologi terbaru pada drone kami dan
                            mengikuti tata cara pengambilan gambar yang baik,
                            baik dari segi cuaca maupun lingkungan sekitar.
                            Dengan menggabungkan pengalaman, pengetahuan, dan
                            teknologi canggih, kami memastikan bahwa setiap
                            gambar dan video yang kami hasilkan memiliki
                            kualitas yang optimal. Pilot kami juga sangat
                            memperhatikan detail dan hasil akhir dari setiap
                            objek yang direkam menggunakan drone. Kami bekerja
                            keras untuk memastikan bahwa klien kami mendapatkan
                            hasil yang memuaskan dan memenuhi harapan mereka,
                        </p>
                    </div>
                    <div className="border border-black w-full h-full text-center p-5 md:p-10 pb-12 md:pb-20">
                        <h1 className="font-bold text-xl md:text-3xl mt-5">
                            Profesional
                        </h1>
                        <p className="indent-8 mt-5 text-xs md:text-sm text-justify text-gray-500">
                            Dioperasikan oleh pilot drone yang berpengalaman,
                            kami telah berhasil menyelesaikan ribuan proyek
                            pengambilan foto/video menggunakan drone. Keahlian
                            dan pengalaman kami memastikan bahwa setiap proyek
                            diselesaikan dengan profesionalisme dan kecakapan
                            tinggi. Kami memahami pentingnya kepuasan klien, dan
                            itulah mengapa kami selalu berusaha untuk memenuhi
                            atau bahkan melebihi harapan klien kami dalam setiap
                            proyek yang kami kerjakan. Dengan fokus pada
                            kualitas, keamanan, dan kepuasan pelanggan, kami
                            siap memberikan solusi drone yang inovatif dan
                            berkualitas tinggi untuk memenuhi berbagai kebutuhan
                            Anda.
                        </p>
                    </div>
                    <div className="border border-black w-full h-full text-center p-5 md:p-10 pb-12 md:pb-20">
                        <h1 className="font-bold text-xs md:text-3xl mt-5">
                            Terpercaya
                        </h1>
                        <p className="indent-8 mt-5 text-xs md:text-sm text-justify text-gray-500">
                            Memberikan kepercayaan akan kepuasan klien dalam
                            menangani proyek yang ditangani, kami secara cepat
                            tanggap dalam menindaklanjuti setiap masukan yang
                            diberikan oleh klien kami. Kami menganggap masukan
                            dari klien sangat berharga dan penting untuk
                            memastikan bahwa proyek tersebut sesuai dengan
                            harapan mereka. Dengan responsif terhadap setiap
                            umpan balik dan permintaan, kami bertujuan untuk
                            membangun relasi yang harmonis dan saling
                            menguntungkan dengan klien kami. Komunikasi yang
                            terbuka dan transparan adalah kunci dalam memastikan
                            bahwa kami selalu berada di jalur yang tepat untuk
                            mencapai keberhasilan bersama.
                        </p>
                    </div>
                </div>
                <div></div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
