import React from "react";

function SelectInput({ children, value, onChange }) {
    return (
        <select
            className="text-xs w-full bg-white px-4 py-2 pr-8 rounded-lg my-2"
            value={value}
            onChange={onChange}
        >
            {children}
        </select>
    );
}

export default SelectInput;
