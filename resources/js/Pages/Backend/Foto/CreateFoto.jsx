import { useForm } from "@inertiajs/inertia-react";
import Sidebar from "@/Components/Backend/Sidebar";
import React from "react";
import Modal from "@/Components/Backend/Modal";
import Button from "@/Components/Backend/Button";

function CreateFoto() {
    const { data, setData, post, processing } = useForm({
        gambar: null,
        nama: "",
        deskripsi: "",
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setData(name, files ? files[0] : value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/tambahfoto");
    };

    return (
        <div>
            <Modal>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input type="file" name="gambar" onChange={handleChange} />
                    <input
                        type="text"
                        name="nama"
                        value={data.nama}
                        onChange={handleChange}
                        placeholder="Nama"
                        required
                    />
                    <textarea
                        type="text"
                        name="deskripsi"
                        value={data.deskripsi}
                        onChange={handleChange}
                        placeholder="Deskripsi"
                        maxLength={50}
                        required
                    ></textarea>
                    <Button>submit</Button>
                </form>
            </Modal>
        </div>
    );
}

export default CreateFoto;
