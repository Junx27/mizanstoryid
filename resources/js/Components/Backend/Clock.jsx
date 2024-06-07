import React, { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    const formatter = new Intl.DateTimeFormat("default", {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    return (
        <div className="mt-3 md:mt-10">
            <h2 className="font-bold mb-4 text-xs md:text-sm">Hari ini</h2>
            <p className="text-xl md:text-4xl text-blue-500 font-bold bg-white shadow-lg p-5 w-32 md:w-64 text-center rounded-lg">
                {formatter.format(time)}
            </p>
        </div>
    );
}

export default Clock;
