import React from "react";

const SearchComponent = ({handleChange}) => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex space-x-2">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-pink-700 bg-white border rounded-full focus:border-pink-400 focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search Spectre" onChange={(e)=>handleChange(e.target.value)}
                />
                <button className="px-4 text-white bg-pink-600 rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default SearchComponent