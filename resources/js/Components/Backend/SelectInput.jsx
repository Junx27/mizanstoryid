import React from "react";

function SelectInput({ children, value, onChange }) {
    return (
        <select
            className="text-xs w-full bg-white border border-blue-500 px-4 py-2 pr-8 rounded my-2"
            value={value}
            onChange={onChange}
        >
            {children}
        </select>
    );
}

export default SelectInput;
