import React from "react";

function Button({ children }) {
    return (
        <button
            className="transition-all duration-500 text-[10px] p-2 px-4 rounded-lg shadow my-3 hover:scale-[105%] hover:rounded-md hover:shadow-lg hover:bg-blue-500 hover:text-white cursor-pointer"
            type="submit"
        >
            {children}
        </button>
    );
}

export default Button;
