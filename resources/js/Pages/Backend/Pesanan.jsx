import React, { useState } from "react";
import Pagination from "@/Components/Backend/Pagination";
import Sidebar from "@/Components/Backend/Sidebar";
import ProgressBar from "@/Components/Backend/ProgressBar";

const ITEMS_PER_PAGE = 3;

function Pesanan() {
    const data = [
        {
            id: 1,
            name: "andi",
            nomor: "0978564588",
            order: "nama: paket bronze, detail:jhkjgjkgjgh jjkgjgj",
        },
        {
            id: 2,
            name: "senna",
            nomor: "0978564588",
            order: "nama: paket bronze, detail:jhkjgjkgjgh jjkgjgj",
        },
        {
            id: 3,
            name: "junx",
            nomor: "0978564588",
            order: "nama: paket bronze, detail:jhkjgjkgjgh jjkgjgj",
        },
        {
            id: 4,
            name: "junx",
            nomor: "0978564588",
            order: "nama: paket bronze, detail:jhkjgjkgjgh jjkgjgj",
        },
        {
            id: 5,
            name: "junx",
            nomor: "0978564588",
            order: "nama: paket bronze, detail:jhkjgjkgjgh jjkgjgj",
        },
        // tambahkan data lainnya
    ];
    const foto = "Penggunanan memori";
    const totalItemsFoto = 2000;
    const completedItemsFoto = data.length;
    const progressFoto = (completedItemsFoto / totalItemsFoto) * 100;

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedIds, setSelectedIds] = useState([]);

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

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
            const allIds = data.map((item) => item.id);
            setSelectedIds(allIds);
        } else {
            setSelectedIds([]);
        }
    };

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return data.slice(startIndex, endIndex);
    };

    const isSelected = (id) => {
        return selectedIds.includes(id);
    };

    const handleDelete = () => {
        console.log("Selected IDs:", selectedIds);
    };

    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div className="ml-[150px] mr-5 pt-20">
                <h1 className="font-bold mb-10">Data pesanan masuk</h1>
                <div className="flex">
                    <div className="mr-5 w-96 shadow-lg p-5 rounded-lg">
                        <ProgressBar
                            progress={progressFoto}
                            nama={foto}
                            progressComplete={completedItemsFoto}
                            progressValue={totalItemsFoto}
                            totalProgress={progressFoto}
                        />
                    </div>
                    <table className="table-auto w-full shadow-lg rounded-lg p-10 bg-white">
                        <thead>
                            <tr className="border-b">
                                <th className="border-r px-3 py-2 font-bold rounded-tl text-start text-blue-500 w-20">
                                    <input
                                        type="checkbox"
                                        className="mr-3 rounded outline-0"
                                        onChange={handleSelectAll}
                                    />
                                    No
                                </th>
                                <th className="border-r px-3 py-2 font-bold text-start text-blue-500">
                                    Nama
                                </th>
                                <th className="border-r px-3 py-2 font-bold text-start text-blue-500">
                                    Nomor
                                </th>
                                <th className="px-3 py-2 font-bold text-start text-blue-500">
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
                                        {index + 1}
                                    </td>
                                    <td className="border-r px-3 py-2 font-bold">
                                        {item.name}
                                    </td>
                                    <td className="border-r px-3 py-2">
                                        {item.nomor}
                                    </td>
                                    <td className="px-3 py-2">{item.order}</td>
                                    <div className=" absolute -top-[100px] right-0 px-3 py-2">
                                        {selectedIds.length > 0 && (
                                            <p className="text-xs flex items-center">
                                                <span
                                                    className="text-sm material-symbols-outlined"
                                                    onClick={handleDelete}
                                                >
                                                    delete
                                                </span>
                                                Hapus
                                            </p>
                                        )}
                                    </div>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    data={data}
                />
            </div>
        </div>
    );
}

export default Pesanan;
