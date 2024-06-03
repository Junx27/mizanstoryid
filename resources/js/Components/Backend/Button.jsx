import React from "react";

function Button({ children }) {
    return (
        <button
            className="transition-all duration-500 text-white text-xs bg-black p-2 px-4 rounded-lg shadow my-3 hover:scale-[102%] hover:shadow-lg hover:bg-blue-500 cursor-pointer"
            type="submit"
        >
            {children}
        </button>
    );
}

export default Button;
