import React, { useState, useEffect } from "react";

function ProgressBar({
    progress,
    nama,
    progressComplete,
    progressValue,
    totalProgress,
}) {
    const [displayProgress, setDisplayProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (displayProgress < progress) {
                setDisplayProgress((prevProgress) => prevProgress + 1);
            } else {
                clearInterval(interval);
            }
        }, 10);

        return () => clearInterval(interval);
    }, [displayProgress, progress]);

    return (
        <div className="mt-3 md:mt-5">
            <h2 className="text-sm md:text-xl font-bold mb-2 md:mb-4">
                {nama}
            </h2>
            <div className="flex text-xs md:text-sm justify-between">
                <p>
                    {progressComplete}/{progressValue}
                </p>
                <p className="text-xs md:text-sm font-bold">{totalProgress}%</p>
            </div>
            <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                <div
                    className="bg-gradient-to-br from-blue-500 to-purple-600 h-full rounded-full"
                    style={{
                        width: `${displayProgress}%`,
                        transition: "width 1s ease-in-out",
                    }}
                ></div>
            </div>
        </div>
    );
}

export default ProgressBar;
