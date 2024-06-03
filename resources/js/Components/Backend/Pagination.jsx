import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange, data }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="mt-10 bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="hidden sm:block">
                <p className="text-xs text-gray-700">
                    Showing
                    <span className="font-bold text-blue-500">
                        {" "}
                        {currentPage}{" "}
                    </span>
                    to
                    <span className="font-bold text-blue-500">
                        {" "}
                        {totalPages}{" "}
                    </span>
                    of
                    <span className="font-bold text-blue-500">
                        {" "}
                        {totalPages}{" "}
                    </span>
                    results
                </p>
            </div>
            <div className="flex-1 flex justify-between sm:justify-end">
                <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
                        currentPage === 1 ? "hidden" : ""
                    }`}
                >
                    Previous
                </button>
                <div>
                    {pageNumbers.map((number) => (
                        <button
                            key={number}
                            onClick={() => onPageChange(number)}
                            className={`ml-2 inline-flex items-center px-4 py-2 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white ${
                                currentPage === number ? "bg-gray-100" : ""
                            }`}
                        >
                            {number}
                        </button>
                    ))}
                </div>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className={`ml-2 relative inline-flex items-center px-4 py-2 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
                        currentPage === totalPages ? "hidden" : ""
                    }`}
                >
                    Next
                </button>
            </div>
        </nav>
    );
};

export default Pagination;
