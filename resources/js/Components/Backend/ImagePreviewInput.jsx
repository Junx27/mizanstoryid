import React, { useState } from "react";
import CloseButton from "./CloseButton";

function ImagePreviewInput(props) {
    const { nama, onChange } = props;
    return (
        <div className="my-3 w-[300px]">
            <label htmlFor={nama}>
                <img src="gallery.png" alt="" className="w-[250px] mx-auto" />
            </label>
            <input
                type="file"
                name={nama}
                id={nama}
                onChange={onChange}
                accept="image/*"
                className="hidden"
            />
        </div>
    );
}

export default ImagePreviewInput;
