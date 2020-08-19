import React from "react";

export default function Placeholder() {
    return (
        <>
            <div className="blink-1 h-8 bg-gray-500 mt-2 mb-4 mx-auto"></div>
            <div className="blink-1 h-4 bg-gray-500 mt-2 mb-4 mx-auto w-3/4"></div>
            <div className="grid gap-4 sm:grid-cols-3">
                <div className="blink-1 px-4 py-12 bg-gray-500 h-64 rounded-lg"></div>
                <div className="blink-1 px-4 py-12 bg-gray-500 h-64 rounded-lg"></div>
                <div className="blink-1 px-4 py-12 bg-gray-500 h-64 rounded-lg"></div>
                <div className="blink-1 px-4 py-12 bg-gray-500 h-64 rounded-lg sm:col-span-3"></div>
            </div>
        </>
    );
}
