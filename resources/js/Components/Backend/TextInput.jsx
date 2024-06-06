import React from "react";

function TextInput(props) {
    const { type, name, value, onChange, placeholder, maxLength } = props;

    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            maxLength={maxLength}
            className="w-full my-3 text-xs p-2 rounded border border-blue-500"
            required
        />
    );
}

export default TextInput;
