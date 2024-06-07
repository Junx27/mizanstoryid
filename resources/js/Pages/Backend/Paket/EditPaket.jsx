import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import Modal from "@/Components/Backend/Modal";
import Button from "@/Components/Backend/Button";
import TextInput from "@/Components/Backend/TextInput";
import TextAreaInput from "@/Components/Backend/TextArea";
import SelectInput from "@/Components/Backend/SelectInput";

function EditPaket({ paket }) {
    const [isSuccess, setIsSuccess] = useState(false);
    const { data, setData, post } = useForm({
        _method: "PUT",
        nama_paket: paket.nama_paket,
        nama: paket.nama,
        jumlah_baterai: paket.jumlah_baterai,
        jam_terbang: paket.jam_terbang,
        operator: paket.operator,
        video: paket.video,
        output: paket.output,
        jam_pilot: paket.jam_pilot,
        lokasi: paket.lokasi,
        harga: paket.harga,
        deskripsi: paket.deskripsi,
    });
    const handleSubmitForm = (e) => {
        e.preventDefault();
        setIsSuccess(true);
        post(`/paketupdate/${paket.id}`);
    };
    return (
        <div className="md:w-[600px]">
            {isSuccess && (
                <div className="relative w-[300px] h-screen mt-32">
                    <Modal>
                        <h1 className="text-xs text-center">
                            Data berhasil dipudate
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
                    onSubmit={handleSubmitForm}
                    className={`flex flex-col md:flex-row ${
                        isSuccess ? "hidden" : "block"
                    }`}
                    content=""
                >
                    <div>
                        <SelectInput
                            value={data.nama_paket}
                            onChange={(e) =>
                                setData("nama_paket", e.target.value)
                            }
                            name="nama_paket"
                            required
                        >
                            <option value="">Pilih drone</option>
                            <option value="AERIAL">AERIAL</option>
                            <option value="FPV">FPV</option>
                        </SelectInput>
                        <SelectInput
                            value={data.nama}
                            onChange={(e) => setData("nama", e.target.value)}
                            name="nama"
                            required
                        >
                            <option value="">Pilih paket</option>
                            <option value="PAKET BRONZE">PAKET BRONZE</option>
                            <option value="PAKET SILVER">PAKET SILVER</option>
                            <option value="PAKET GOLD">PAKET GOLD</option>
                        </SelectInput>
                        <SelectInput
                            value={data.jumlah_baterai}
                            onChange={(e) =>
                                setData("jumlah_baterai", e.target.value)
                            }
                            name="jumlah_baterai"
                            required
                        >
                            <option value="">Pilih baterai</option>
                            <option value="1 Baterai">1 Baterai</option>
                            <option value="2 Baterai">2 Baterai</option>
                            <option value="3 Baterai">3 Baterai</option>
                        </SelectInput>
                        <SelectInput
                            value={data.jam_terbang}
                            onChange={(e) =>
                                setData("jam_terbang", e.target.value)
                            }
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
                            value={data.operator}
                            onChange={(e) =>
                                setData("operator", e.target.value)
                            }
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
                            value={data.video}
                            onChange={(e) => setData("video", e.target.value)}
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
                    <div className="md:ml-5">
                        <SelectInput
                            value={data.output}
                            onChange={(e) => setData("output", e.target.value)}
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
                            value={data.jam_pilot}
                            onChange={(e) =>
                                setData("jam_pilot", e.target.value)
                            }
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
                            value={data.lokasi}
                            onChange={(e) => setData("lokasi", e.target.value)}
                            name="lokasi"
                            required
                        >
                            <option value="">Pilih lokasi</option>
                            <option value="1 Lokasi">1 Lokasi</option>
                            <option value="1-2 Lokasi">1-2 Lokasi</option>
                            <option value="2-4 Lokasi">2-4 Lokasi</option>
                        </SelectInput>
                        <TextInput
                            type="text"
                            name="harga"
                            value={data.harga}
                            onChange={(e) => setData("harga", e.target.value)}
                            placeholder="Harga"
                            minLength={5}
                            maxLength={200}
                            required
                        />
                        <TextAreaInput
                            type="text"
                            name="deskripsi"
                            value={data.deskripsi}
                            onChange={(e) =>
                                setData("deskripsi", e.target.value)
                            }
                            placeholder="Deskripsi"
                            minLength={5}
                            maxLength={200}
                            className="text-justify"
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

export default EditPaket;
