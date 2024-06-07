import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import Modal from "@/Components/Backend/Modal";
import Button from "@/Components/Backend/Button";
import TextInput from "@/Components/Backend/TextInput";
import TextAreaInput from "@/Components/Backend/TextArea";
import { url } from "@/Data/Url";

function EditVideo({ video }) {
    const [isSuccess, setIsSuccess] = useState(false);
    const { data, setData, post, processing } = useForm({
        _method: "PUT",
        nama: video.nama,
        deskripsi: video.deskripsi,
        gambar_lama: video.gambar,
    });
    const [imagePreview, setImagePreview] = useState(url + data.gambar_lama);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData("gambar", file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSuccess(true);
        post(`/videoupdate/${video.id}`);
    };
    return (
        <div>
            {isSuccess && (
                <div className="relative w-[300px] h-screen mt-32">
                    <Modal>
                        <h1 className="text-xs text-center">
                            Data berhasil diupdate
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
                    className={`flex flex-col ${
                        isSuccess ? "hidden" : "block"
                    }`}
                >
                    <label htmlFor="gambar">
                        <video
                            src={imagePreview}
                            alt="Preview"
                            autoPlay
                            muted
                            loop
                            className="mt-2 rounded-lg w-[300px] h-[250px] object-cover shadow-lg"
                        />
                        <input
                            type="hidden"
                            name="gambar_lama"
                            value={video.gambar}
                        />
                        <input
                            type="file"
                            name="gambar"
                            id="gambar"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </label>
                    <TextInput
                        type="text"
                        name="nama"
                        value={data.nama}
                        onChange={(e) => setData("nama", e.target.value)}
                        placeholder="Nama"
                        minLength={5}
                        maxLength={25}
                        required
                    />
                    <TextAreaInput
                        type="text"
                        name="deskripsi"
                        value={data.deskripsi}
                        onChange={(e) => setData("deskripsi", e.target.value)}
                        placeholder="Deskripsi"
                        minLength={5}
                        maxLength={50}
                        required
                    />
                    <Button disabled={processing}>Submit</Button>
                </form>
            </Modal>
        </div>
    );
}

export default EditVideo;
