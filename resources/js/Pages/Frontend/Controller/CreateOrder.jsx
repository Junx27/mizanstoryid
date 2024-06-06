import Button from "@/Components/Backend/Button";
import FormaterRupiah from "@/Components/Backend/FormaterRupiah";
import Modal from "@/Components/Backend/Modal";
import TextInput from "@/Components/Backend/TextInput";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";

function CreateOrder({ order }) {
    const formatRupiah = (value) => {
        const formatter = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 2,
        });
        return formatter.format(value);
    };
    const { data, setData, post, processing } = useForm({
        deskripsi: `Paket ${order.nama_paket} Tipe ${
            order.nama
        } Harga ${formatRupiah(order.harga)}`,
        product_id: order.id,
        user_id: order.user_id,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/tambahorder", { data });
        const message = encodeURIComponent(
            `Hallo...\nDengan admin Mizan Story Id, Saya:\n-------------------------------------\nNama: *${data.nama}*\nKontak: *${data.kontak}*\n\nDeskripsi: _*${data.deskripsi}*_\n\n-------------------------------------\nMohon konfirmasi pesanan saya. Terima Kasih.`
        );
        const whatsappUrl = `https://wa.me/6281326903289?text=${message}`;
        window.open(whatsappUrl, "_blank");
        window.location.reload();
    };

    return (
        <div className="w-[300px]">
            <Modal>
                <h1 className="font-bold text-center">
                    {order.nama_paket}/{order.nama}
                </h1>
                <div className="text-center my-2">
                    <FormaterRupiah number={order.harga} />
                </div>
                <form onSubmit={handleSubmit}>
                    <TextInput
                        type="text"
                        name="nama"
                        value={data.nama}
                        onChange={(e) => setData("nama", e.target.value)}
                        placeholder="Masukan nama"
                        maxLength={25}
                        required
                    />
                    <TextInput
                        type="number"
                        name="kontak"
                        value={data.kontak}
                        onChange={(e) => setData("kontak", e.target.value)}
                        placeholder="Masukan kontak"
                        maxLength={25}
                        required
                    />
                    <input
                        type="text"
                        name="deskripsi"
                        value={data.deskripsi}
                        onChange={(e) => setData("deskripsi", e.target.value)}
                        placeholder="Deskripsi"
                        maxLength={100}
                        className="hidden"
                        required
                    />
                    <input
                        type="text"
                        name="product_id"
                        value={data.product_id}
                        onChange={(e) => setData("product_id", e.target.value)}
                        placeholder="Produk ID"
                        className="hidden"
                        required
                    />
                    <input
                        type="text"
                        name="user_id"
                        value={data.user_id}
                        onChange={(e) => setData("user_id", e.target.value)}
                        placeholder="User ID"
                        className="hidden"
                        required
                    />
                    <Button className={"w-full mt-10"} type="submit">
                        Submit
                    </Button>
                </form>
            </Modal>
        </div>
    );
}

export default CreateOrder;
