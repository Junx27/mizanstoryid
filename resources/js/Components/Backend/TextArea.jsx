import React from "react";

function TextAreaInput(props) {
    const { name, value, onChange, placeholder, maxLength } = props;

    return (
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            maxLength={maxLength}
            className="w-full mt-2 mb-5 text-xs p-2 rounded border border-blue-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-20"
            required
        ></textarea>
    );
}

export default TextAreaInput;
