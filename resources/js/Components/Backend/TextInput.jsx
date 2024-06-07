import React from "react";

function TextInput(props) {
    const { type, name, value, onChange, placeholder, maxLength, minLength } =
        props;

    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            minLength={minLength}
            maxLength={maxLength}
            className="w-full my-3 text-xs p-2 rounded-lg"
            required
        />
    );
}

export default TextInput;
