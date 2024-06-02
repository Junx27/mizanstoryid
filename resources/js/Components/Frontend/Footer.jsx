import React from "react";

function Footer() {
    return (
        <div className="mx-5 text-xs md:text-sm md:mx-20 border-t border-black mb-5">
            <div className="mt-10 grid grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <h1 className="font-bold text-xl">Mizan Story.Id</h1>
                </div>
                <div className="col-span-12 md:col-span-5 mt-10 md:mt-0 ml-3 md:ml-0">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div className="mx-2">
                            <h1 className="font-bold">Navbar</h1>
                            <ul className="mt-5 text-xs md:text-sm list-disc list-inside">
                                <li className="my-2">Home</li>
                                <li className="my-2">About</li>
                                <li className="my-2">Portofolio</li>
                                <li className="my-2">Price List</li>
                            </ul>
                        </div>
                        <div className="mx-2">
                            <h1 className="font-bold">Blog</h1>
                            <ul className="mt-5 text-xs md:text-sm list-disc list-inside">
                                <li className="my-2">Traveling</li>
                                <li className="my-2">Event</li>
                                <li className="my-2">Comunity</li>
                            </ul>
                        </div>
                        <div className="mx-2">
                            <h1 className="font-bold">Comunity</h1>
                            <ul className="mt-5 text-xs md:text-sm list-disc list-inside">
                                <li className="my-2">Purbalingga Drone</li>
                                <li className="my-2">Purbalingga Asik</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-xs text-gray-400 text-center mt-20">
                Copy Right &copy; 2024 Mizan Story.Id Reserved.
            </p>
        </div>
    );
}

export default Footer;
