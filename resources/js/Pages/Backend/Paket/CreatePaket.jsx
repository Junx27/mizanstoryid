import React, { useState } from "react";
import Modal from "@/Components/Backend/Modal";
import Button from "@/Components/Backend/Button";
import TextInput from "@/Components/Backend/TextInput";
import TextAreaInput from "@/Components/Backend/TextArea";
import axios from "axios";
import SelectInput from "@/Components/Backend/SelectInput";
import { api } from "@/Data/Api";

function CreatePaket() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [nama_paket, setNamaPaket] = useState("");
    const [nama, setNama] = useState("");
    const [jumlah_baterai, setJumlahBaterai] = useState("");
    const [jam_terbang, setJamTerbang] = useState("");
    const [operator, setOperator] = useState("");
    const [video, setVideo] = useState("");
    const [output, setOutput] = useState("");
    const [jam_pilot, setJamPilot] = useState("");
    const [lokasi, setLokasi] = useState("");
    const [harga, setHarga] = useState("");
    const [deskripsi, setDeskripsi] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("nama_paket", nama_paket);
            formData.append("nama", nama);
            formData.append("jumlah_baterai", jumlah_baterai);
            formData.append("jam_terbang", jam_terbang);
            formData.append("operator", operator);
            formData.append("video", video);
            formData.append("output", output);
            formData.append("jam_pilot", jam_pilot);
            formData.append("lokasi", lokasi);
            formData.append("harga", harga);
            formData.append("deskripsi", deskripsi);
            await axios.post(`${api}tambahpaket`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setIsSuccess(true);
        } catch (error) {
            if (error.response) {
                alert("Data gagal dimasukkan");
                window.location.reload();
            }
        }
    };

    return (
        <div className="md:w-[600px]">
            {isSuccess && (
                <div className="relative w-[300px] h-screen mt-32">
                    <Modal>
                        <h1 className="text-xs text-center">
                            Data berhasil dimasukan
                        </h1>
                        <div
                            onClick={() => window.location.reload()}
                            className="text-center mt-5"
                        >
                            <Button className={"w-32"}>ok</Button>
                        </div>
                    </Modal>
                </div>
            )}
            <Modal>
                <form
                    onSubmit={handleSubmit}
                    className={`flex flex-col md:flex-row ${
                        isSuccess ? "hidden" : "block"
                    }`}
                    content=""
                >
                    <div>
                        <SelectInput
                            value={nama_paket}
                            onChange={(e) => setNamaPaket(e.target.value)}
                            name="nama_paket"
                            required
                        >
                            <option value="">Pilih drone</option>
                            <option value="AERIAL">AERIAL</option>
                            <option value="FPV">FPV</option>
                        </SelectInput>
                        <SelectInput
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            name="nama"
                            required
                        >
                            <option value="">Pilih paket</option>
                            <option value="PAKET BRONZE">PAKET BRONZE</option>
                            <option value="PAKET SILVER">PAKET SILVER</option>
                            <option value="PAKET GOLD">PAKET GOLD</option>
                        </SelectInput>
                        <SelectInput
                            value={jumlah_baterai}
                            onChange={(e) => setJumlahBaterai(e.target.value)}
                            name="jumlah_baterai"
                            required
                        >
                            <option value="">Pilih baterai</option>
                            <option value="1 Baterai">1 Baterai</option>
                            <option value="2 Baterai">2 Baterai</option>
                            <option value="3 Baterai">3 Baterai</option>
                        </SelectInput>
                        <SelectInput
                            value={jam_terbang}
                            onChange={(e) => setJamTerbang(e.target.value)}
                            name="jam_terbang"
                            required
                        >
                            <option value="">Pilih jam terbang</option>
                            <option value="Terbang 15-30 Menit 1 Kali">
                                Terbang 15-30 Menit 1 Kali
                            </option>
                            <option value="Terbang 15-30 Menit 2 Kali">
                                Terbang 15-30 Menit 2 Kali
                            </option>
                            <option value="Terbang 15-30 Menit 1 Kali">
                                Terbang 15-30 Menit 3 Kali
                            </option>
                        </SelectInput>
                        <SelectInput
                            value={operator}
                            onChange={(e) => setOperator(e.target.value)}
                            name="operator"
                            required
                        >
                            <option value="">Pilih operator</option>
                            <option value="Pilot">Pilot</option>
                            <option value="Operator">Operator</option>
                            <option value="Pilot/Operator">
                                Pilot/Operator
                            </option>
                        </SelectInput>
                        <SelectInput
                            value={video}
                            onChange={(e) => setVideo(e.target.value)}
                            name="video"
                            required
                        >
                            <option value="">Pilih durasi video</option>
                            <option value="Foto Video Terbatas">
                                Foto Video Terbatas
                            </option>
                            <option value="Foto Video Unlimited">
                                Foto Video Unlimited
                            </option>
                        </SelectInput>
                    </div>
                    <div className="ml-0 md:ml-5">
                        <SelectInput
                            value={output}
                            onChange={(e) => setOutput(e.target.value)}
                            name="output"
                            required
                        >
                            <option value="">Pilih output</option>
                            <option value="Output File Mentah">
                                Output File Mentah
                            </option>
                            <option value="Output File Jadi">
                                Output File Jadi
                            </option>
                        </SelectInput>
                        <SelectInput
                            value={jam_pilot}
                            onChange={(e) => setJamPilot(e.target.value)}
                            name="jam_pilot"
                            required
                        >
                            <option value="">Pilih stand by pilot</option>
                            <option value="Pilot Stand By 1-2 Jam">
                                Pilot Stand By 1-2 Jam
                            </option>
                            <option value="Pilot Stand By 2-4 Jam">
                                Pilot Stand By 2-4 Jam
                            </option>
                            <option value="Pilot Stand By 5-7 Jam">
                                Pilot Stand By 5-7 Jam
                            </option>
                        </SelectInput>
                        <SelectInput
                            value={lokasi}
                            onChange={(e) => setLokasi(e.target.value)}
                            name="lokasi"
                            required
                        >
                            <option value="">Pilih lokasi</option>
                            <option value="1 Lokasi">1 Lokasi</option>
                            <option value="1-2 Lokasi">1-2 Lokasi</option>
                            <option value="2-4 Lokasi">2-4 Lokasi</option>
                        </SelectInput>
                        <TextInput
                            type="number"
                            name="harga"
                            value={harga}
                            onChange={(e) => setHarga(e.target.value)}
                            placeholder="Harga"
                            minLength={5}
                            maxLength={25}
                            required
                        />
                        <TextAreaInput
                            type="text"
                            name="deskripsi"
                            value={deskripsi}
                            onChange={(e) => setDeskripsi(e.target.value)}
                            placeholder="Deskripsi"
                            minLength={5}
                            maxLength={200}
                            required
                        ></TextAreaInput>
                        <div className="flex justify-end">
                            <Button className={"w-full"}>Submit</Button>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default CreatePaket;
