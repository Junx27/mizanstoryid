import React, { useState } from "react";

function Data() {
    const data = [
        {
            id: 1,
            nama: "junx",
        },
        {
            id: 2,
            nama: "senna",
        },
        {
            id: 3,
            nama: "afis",
        },
        {
            id: 4,
            nama: "junx",
        },
        {
            id: 5,
            nama: "senna",
        },
        {
            id: 6,
            nama: "afis",
        },
        {
            id: 7,
            nama: "junx",
        },
        {
            id: 8,
            nama: "senna",
        },
        {
            id: 9,
            nama: "afis",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(
            currentIndex === data.length - 1 ? 0 : currentIndex + 1
        );
    };

    return (
        <div>
            <div>
                {data[currentIndex].nama}
                <p>{data[currentIndex].id}</p>
            </div>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

export default Data;
