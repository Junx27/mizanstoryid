import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import Modal from "@/Components/Backend/Modal";
import Button from "@/Components/Backend/Button";
import TextInput from "@/Components/Backend/TextInput";
import TextAreaInput from "@/Components/Backend/TextArea";
import { url } from "@/Data/Url";

function EditBlog({ blog }) {
    const { data, setData, post, processing } = useForm({
        _method: "PUT",
        nama: blog.nama,
        deskripsi: blog.deskripsi,
        gambar_lama: blog.gambar,
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
        post(`/blogupdate/${blog.id}`);
    };
    return (
        <div>
            <Modal>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label htmlFor="gambar">
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="mt-2 rounded-lg w-[300px] h-[250px] object-cover shadow-lg"
                        />
                        <input
                            type="hidden"
                            name="gambar_lama"
                            value={blog.gambar}
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
                        maxLength={25}
                        required
                    />
                    <TextAreaInput
                        type="text"
                        name="deskripsi"
                        value={data.deskripsi}
                        onChange={(e) => setData("deskripsi", e.target.value)}
                        placeholder="Deskripsi"
                        maxLength={50}
                        required
                    />
                    <Button disabled={processing}>Submit</Button>
                </form>
            </Modal>
        </div>
    );
}

export default EditBlog;
