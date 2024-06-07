import React, { useState } from "react";
import Pagination from "@/Components/Backend/Pagination";
import Sidebar from "@/Components/Backend/Sidebar";
import ProgressBar from "@/Components/Backend/ProgressBar";
import Button from "@/Components/Backend/Button";
import axios from "axios";
import PopOver from "@/Components/PopOver";

function Pesanan({ pesanans }) {
    const ITEMS_PER_PAGE = 10;
    const order = "Penggunanan memori";
    const totalItemsOrder = 2000;
    const completedItemsOrder = pesanans.length;
    const progressOrder = (completedItemsOrder / totalItemsOrder) * 100;

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedIds, setSelectedIds] = useState([]);
    const [filterNama, setFilterNama] = useState("");
    const [openPopup, setOpenPopup] = useState(false);

    const totalPages = Math.ceil(pesanans.length / ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCheckboxChange = (e, id) => {
        if (e.target.checked) {
            setSelectedIds([...selectedIds, id]);
        } else {
            setSelectedIds(
                selectedIds.filter((selectedId) => selectedId !== id)
            );
        }
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            const allIds = pesanans.map((item) => item.id);
            setSelectedIds(allIds);
        } else {
            setSelectedIds([]);
        }
    };

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;

        let filteredData = pesanans;

        if (filterNama) {
            filteredData = filteredData.filter((item) =>
                item.nama.toLowerCase().includes(filterNama.toLowerCase())
            );
        }

        return filteredData.slice(startIndex, endIndex);
    };

    const isSelected = (id) => {
        return selectedIds.includes(id);
    };

    const handleDelete = () => {
        selectedIds.forEach(async (id) => {
            try {
                await axios.delete(`/pesanan/${id}`);
                setOpenPopup(true);
            } catch (error) {
                console.error("Error deleting data:", error);
            }
        });
    };
    const HandleKontak = (kontak) => {
        const message = encodeURIComponent(
            `Hallo...\nSaya Mizan Story Id, akan konfirmasi pesanan anda. Terima Kasih.`
        );
        const whatsappUrl = `https://wa.me/${kontak}?text=${message}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div className="pt-5 mx-5 md:mx-0 md:ml-[150px] md:mr-5 md:pt-20 relative">
                {openPopup && (
                    <PopOver>
                        <div className="bg-white shadow-lg w-64 p-5 rounded-lg -mt-64">
                            <p className="text-xs text-center">
                                Data pesanan masuk telah dihapus
                            </p>
                            <div
                                className="flex justify-center mt-5"
                                onClick={() => {
                                    setOpenPopup(!openPopup),
                                        window.location.reload();
                                }}
                            >
                                <Button className={"w-20"}>ok</Button>
                            </div>
                        </div>
                    </PopOver>
                )}
                <h1 className="text-xs md:text-sm font-bold mb-10">
                    Daftar pesanan masuk
                </h1>
                <div className="flex flex-col md:flex-row">
                    <div className="mr-5 w-full md:w-96 h-32 md:h-64 shadow-lg p-5 rounded-lg">
                        <ProgressBar
                            progress={progressOrder}
                            nama={order}
                            progressComplete={completedItemsOrder}
                            progressValue={totalItemsOrder}
                            totalProgress={progressOrder.toFixed(2)}
                        />
                    </div>
                    <div className="mt-10 md:mt-0 mx-auto md:mx-0 mb-5 md:absolute md:top-20 md:left-[30%]">
                        <input
                            type="text"
                            placeholder="Cari nama"
                            value={filterNama}
                            onChange={(e) => setFilterNama(e.target.value)}
                            className="w-64 px-2 md:py-1 rounded-lg text-xs"
                        />
                    </div>

                    <table className="relative mt-10 md:mt-0 table-auto w-full shadow-lg rounded-lg p-5 bg-white">
                        {selectedIds.length > 0 && (
                            <div
                                className="flex items-center absolute right-5 -top-2"
                                onClick={handleDelete}
                            >
                                <Button
                                    className={
                                        "shadow-sm text-[10px] md:text-xs"
                                    }
                                >
                                    Hapus
                                </Button>
                            </div>
                        )}
                        <thead>
                            <tr className="border-b">
                                <th className="border-r px-2 md:px-3 py-2 font-bold rounded-tl text-start text-blue-500">
                                    <input
                                        type="checkbox"
                                        className="rounded outline-0"
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-xs w-64">
                                    Nama
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-xs w-96">
                                    Kontak
                                </th>
                                <th className="px-2 md:px-3 py-4 font-bold text-start text-xs w-full">
                                    Order
                                </th>
                            </tr>
                        </thead>
                        <tbody className="relative text-[10px]">
                            {getCurrentPageData().map((item, index) => (
                                <tr key={index} className="border-b">
                                    <td className="border-r px-2 md:px-3 py-1">
                                        <input
                                            type="checkbox"
                                            id={`select-${item.id}`}
                                            className="rounded outline-0"
                                            checked={isSelected(item.id)}
                                            onChange={(e) =>
                                                handleCheckboxChange(e, item.id)
                                            }
                                        />
                                    </td>
                                    <td className="border-r px-2 md:px-3 py-1 font-bold capitalize">
                                        {item.nama}
                                    </td>
                                    <td className="border-r px-2 md:px-3 py-1 flex flex-col md:flex-row md:justify-between items-center pt-4">
                                        {item.kontak}
                                        <div
                                            onClick={() =>
                                                HandleKontak(item.kontak)
                                            }
                                            className="md:ml-3 pt-4 md:pt-0"
                                        >
                                            <Button className={"text-[10px]"}>
                                                Hubungi
                                            </Button>
                                        </div>
                                    </td>
                                    <td className="px-2 md:px-3 py-1">
                                        {item.deskripsi}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mb-20">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        data={pesanans}
                    />
                </div>
            </div>
        </div>
    );
}

export default Pesanan;
