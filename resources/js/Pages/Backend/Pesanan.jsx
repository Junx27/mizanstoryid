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

    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div className="ml-[150px] mr-5 pt-20 relative">
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
                <h1 className="font-bold mb-10">Daftar pesanan masuk</h1>
                <div className="flex">
                    <div className="mr-5 w-96 shadow-lg p-5 rounded-lg">
                        <ProgressBar
                            progress={progressOrder}
                            nama={order}
                            progressComplete={completedItemsOrder}
                            progressValue={totalItemsOrder}
                            totalProgress={progressOrder.toFixed(2)}
                        />
                    </div>
                    <div className="mb-5 absolute top-20 left-[25%]">
                        <input
                            type="text"
                            placeholder="Cari nama"
                            value={filterNama}
                            onChange={(e) => setFilterNama(e.target.value)}
                            className="border border-blue-500 px-2 py-1 rounded-lg text-xs"
                        />
                    </div>
                    <table className="table-auto w-full shadow-lg rounded-lg p-10 bg-white">
                        <thead>
                            <tr className="border-b">
                                <th className="border-r px-3 py-2 font-bold rounded-tl text-start text-blue-500 w-5">
                                    <input
                                        type="checkbox"
                                        className="rounded outline-0"
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="border-r px-3 py-4 font-bold text-start text-sm">
                                    Nama
                                </th>
                                <th className="border-r px-3 py-4 font-bold text-start text-sm">
                                    Kontak
                                </th>
                                <th className="px-3 py-4 font-bold text-start text-sm">
                                    Order
                                </th>
                            </tr>
                        </thead>
                        <tbody className="relative text-sm">
                            {getCurrentPageData().map((item, index) => (
                                <tr key={index} className="border-b">
                                    <td className="border-r px-3 py-2">
                                        <input
                                            type="checkbox"
                                            id={`select-${item.id}`}
                                            className="mr-3 rounded outline-0"
                                            checked={isSelected(item.id)}
                                            onChange={(e) =>
                                                handleCheckboxChange(e, item.id)
                                            }
                                        />
                                    </td>
                                    <td className="border-r px-3 py-2 font-bold">
                                        {item.nama}
                                    </td>
                                    <td className="border-r px-3 py-2">
                                        {item.kontak}
                                    </td>
                                    <td className="px-3 py-2">
                                        {item.deskripsi}
                                    </td>
                                    <td className=" absolute -top-[100px] right-0 px-3 py-2">
                                        {selectedIds.length > 0 && (
                                            <div
                                                className="text-xs flex items-center"
                                                onClick={handleDelete}
                                            >
                                                <Button className={"shadow-sm"}>
                                                    Hapus
                                                </Button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    data={pesanans}
                />
            </div>
        </div>
    );
}

export default Pesanan;
