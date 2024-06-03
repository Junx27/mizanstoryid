import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const AddDataForm = () => {
    const [formData, setFormData] = useState({
        nama: "",
        deskripsi: "",
        gambar: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevFormData) => ({
            ...prevFormData,
            gambar: file,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataUpload = new FormData();
        formDataUpload.append("nama", formData.nama);
        formDataUpload.append("deskripsi", formData.deskripsi);
        formDataUpload.append("gambar", formData.gambar);

        Inertia.post("/api/data", formDataUpload, {
            onSuccess: () => {
                console.log("Data berhasil ditambahkan!");
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Nama"
            />
            <textarea
                name="deskripsi"
                value={formData.deskripsi}
                onChange={handleChange}
                placeholder="Deskripsi"
            ></textarea>
            <input
                type="file"
                name="gambar"
                accept="image/*"
                onChange={handleFileChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddDataForm;
