import React from "react";

const formatDateToWIB = (isoDate) => {
    const date = new Date(isoDate);
    const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    const formatter = new Intl.DateTimeFormat("id-ID", options);
    return formatter.format(date);
};

const DateFormater = ({ isoDate }) => {
    const formattedDate = formatDateToWIB(isoDate);

    return (
        <div className="text-[10px] text-gray-500">
            <p>{formattedDate}</p>
        </div>
    );
};

export default DateFormater;
