import CloseButton from "@/Components/Backend/CloseButton";
import { url } from "@/Data/Url";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";

function UpdateVideo({ video }) {
    const { data, setData, put, processing } = useForm({
        _method: "PUT",
        viewer: video.viewer + 1,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/updatevideoviewer/${video.id}`);
    };
    return (
        <form onSubmit={handleSubmit} className="relative">
            <input
                type="text"
                value={data.viewer}
                onChange={(e) => setData("viewer", e.target.value)}
                className="hidden"
            />
            <img
                src={url + video.gambar}
                alt=""
                className="w-[1200px] h-[720px] object-cover rounded-lg"
            />
            <button type="submit" className="absolute top-3 right-3">
                <CloseButton />
            </button>
        </form>
    );
}

export default UpdateVideo;