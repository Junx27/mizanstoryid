import React from "react";

function CloseButton() {
    return (
        <div>
            <span className="transition-all duration-500 material-symbols-outlined shadow hover:text-white rounded hover:bg-red-500 cursor-pointer hover:scale-[102%] hover:shadow-lg">
                close
            </span>
        </div>
    );
}

export default CloseButton;
