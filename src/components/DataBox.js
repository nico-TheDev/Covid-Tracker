import React from "react";

export default function DataBox({ count, title, icon, color }) {
    console.log(count);
    return (
        <figure
            className={`w-full shadow-lg px-2 py-12 bg-white text-center rounded-lg border-b-8 border-${color}-500`}
        >
            <span className={`text-4xl`}>{icon}</span>
            <h2 className="text-2xl font-bold">
                {Number(count).toLocaleString()}
            </h2>
            <h3 className="text-lg text-gray-700">{title}</h3>
        </figure>
    );
}
