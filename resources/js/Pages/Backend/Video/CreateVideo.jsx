import React, { useState } from "react";
import Modal from "@/Components/Backend/Modal";
import Button from "@/Components/Backend/Button";
import TextInput from "@/Components/Backend/TextInput";
import TextAreaInput from "@/Components/Backend/TextArea";
import ImagePreviewInput from "@/Components/Backend/ImagePreviewInput";
import axios from "axios";

function CreateVideo() {
    const [gambar, setGambar] = useState(null);
    const [nama, setNama] = useState("");
    const [deskripsi, setDeskripsi] = useState("");

    const [imagePreview, setImagePreview] = useState(null);
    const [mouse, setMouse] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            setGambar(file);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("gambar", gambar);
            formData.append("nama", nama);
            formData.append("deskripsi", deskripsi);

            await axios.post("http://127.0.0.1:8000/tambahvideo", formData, {
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
        <div>
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
                    className={`flex flex-col ${
                        isSuccess ? "hidden" : "block"
                    }`}
                    content=""
                >
                    <div className={`${imagePreview ? "hidden" : "block"}`}>
                        <label htmlFor="gambar">
                            <img
                                src="gallery.png"
                                alt=""
                                className="w-[250px] mx-auto"
                            />
                        </label>
                        <input
                            type="file"
                            nama="gambar"
                            id="gambar"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </div>
                    {imagePreview && (
                        <div className="relative">
                            <video
                                src={imagePreview}
                                alt="Preview"
                                className="mt-2 rounded-lg w-[300px] h-[250px] object-cover shadow-lg"
                                onMouseOver={() => setMouse(true)}
                                onMouseOut={() => setMouse(false)}
                            />
                            <div
                                onMouseOver={() => setMouse(true)}
                                onMouseOut={() => setMouse(false)}
                            >
                                <div
                                    className={`absolute -top-4 bg-white rounded-lg ${
                                        mouse ? "block" : "hidden"
                                    }`}
                                >
                                    <ImagePreviewInput
                                        nama="gambar"
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    <TextInput
                        type="text"
                        name="nama"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        placeholder="Nama"
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
                        maxLength={50}
                        required
                    ></TextAreaInput>
                    <Button>Submit</Button>
                </form>
            </Modal>
        </div>
    );
}

export default CreateVideo;
