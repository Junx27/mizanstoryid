import Button from "@/Components/Backend/Button";
import DateFormater from "@/Components/Backend/DateFormater";
import SidebarKonsumen from "@/Components/Frontend/SidebarUser";
import PopOver from "@/Components/PopOver";
import { api } from "@/Data/Api";
import { url } from "@/Data/Url";
import axios from "axios";
import React, { useState } from "react";
import UpdateBlog from "./Controller/UpdateBlog";
function Blog({ blogs }) {
    const [openBlog, setOpenBlog] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState();
    const handleEditBlog = async (id) => {
        try {
            const response = await axios.get(`${api}viewblog/${id}`);
            setSelectedBlog(response.data);
            setOpenBlog(true);
        } catch (error) {
            console.error("Error fetching foto data:", error);
        }
    };
    return (
        <div>
            <SidebarKonsumen />
            <div className="mx-5 md:mx-0 pt-5 md:ml-[150px] md:pt-10">
                <div>
                    <h1 className="transition-all duration-100 font-bold text-sm md:text-xl text-center py-2">
                        Blog Mizan Story.Id
                    </h1>
                </div>
                <p className="text-gray-500 text-[10px] md:text-xs text-center mb-5">
                    Gambar diambil dengan menggunakan drone AERIAL dan drone FPV
                </p>
                <div className="flex flex-row overflow-x-auto">
                    {blogs.map((row, index) => (
                        <div
                            key={index}
                            className="mx-3"
                            onClick={() => handleEditBlog(row.id)}
                        >
                            <Button
                                className={
                                    "w-32 truncate capitalize text-[8px]"
                                }
                            >
                                {row.nama}
                            </Button>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:mr-5 mt-3">
                    {blogs.map((row, index) => (
                        <div
                            key={index}
                            className=""
                            onClick={() => handleEditBlog(row.id)}
                        >
                            <div className="mx-3 flex text-[10px] my-3 text-gray-500 capitalize">
                                <DateFormater isoDate={row.created_at} />|{" "}
                                {row.user.nama} | {row.nama}
                            </div>
                            <img
                                src={url + row.gambar}
                                alt=""
                                className="transition-all duration-500 w-full h-[250px] object-cover rounded-lg hover:rounded-sm hover:brightness-90"
                            />
                            <h1 className="mx-3 font-bold mb-2 mt-3 capitalize">
                                {row.nama}
                            </h1>
                            <p className="mx-3 text-gray-500 text-[10px] mb-3 capitalize">
                                Oleh {row.user.nama}
                            </p>
                            <p className="mx-3 text-[10px] text-justify indent-8 font-light h-5">
                                {row.deskripsi}
                            </p>
                            <div className="mt-5 px-2 text-[10px] flex justify-between items-center">
                                <div className="flex">
                                    <span className="material-symbols-outlined text-xs text-gray-500">
                                        visibility
                                    </span>
                                    <p className="ml-3 text-gray-500 w-20 truncate">
                                        {row.viewer.toLocaleString()} views
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {openBlog && (
                    <PopOver>
                        <div className="relative">
                            <UpdateBlog blog={selectedBlog} />
                        </div>
                    </PopOver>
                )}
            </div>
        </div>
    );
}

export default Blog;
