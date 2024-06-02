import Sidebar from "@/Components/Backend/Sidebar";
import { Inertia, navigate } from "@inertiajs/inertia";
import React from "react";

function Dashboard() {
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div className="pt-20 ml-[150px]">
                <h1>ini adalah menu dashboard</h1>
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-6">
                        <h1>Konten</h1>
                    </div>
                    <div className="col-span-3">
                        <h1>Konten</h1>
                    </div>
                    <div className="col-span-3">
                        <h1>Konten</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
