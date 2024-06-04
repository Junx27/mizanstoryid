import React from "react";

function TextInput(props) {
    const { type, name, value, onChange, placeholder } = props;

    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="my-3 text-xs p-2 rounded-lg border border-blue-500"
            required
        />
    );
}

export default TextInput;
