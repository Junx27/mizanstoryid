import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyCalendar() {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div className="mt-5 md:mt-10 md:w-96">
            <h2 className="text-sm md:text-3xl font-bold mb-4">Kalender</h2>
            <div className="mx-auto p-5 rounded-lg shadow-lg bg-gradient-to-br from-blue-400 to-purple-500">
                <Calendar onChange={onChange} value={date} />
            </div>
        </div>
    );
}

export default MyCalendar;
