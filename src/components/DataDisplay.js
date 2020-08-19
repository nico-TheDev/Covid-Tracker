import React from "react";
import DataBox from "./DataBox";
import ConvertDate from "../utils/ConvertDate";
import BarChart from "./Bar";

export default function DataDisplay({
    recoveredCount,
    deathCount,
    confirmedCount,
    lastUpdate,
}) {
    return (
        <>
            <h3 className="mb-4 text-center text-gray-800">
                Last Updated: {ConvertDate(lastUpdate.toString().slice(0, 10))}
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
                <DataBox
                    icon="🥳"
                    color="green"
                    title="Recovered"
                    count={recoveredCount.value}
                />
                <DataBox
                    icon="😷"
                    color="orange"
                    title="Confirmed"
                    count={confirmedCount.value}
                />
                <DataBox
                    icon="💀"
                    color="red"
                    title="Deaths"
                    count={deathCount.value}
                />
                <div className="bg-white p-4 sm:col-span-3 rounded-lg shadow-md">
                    <BarChart
                        recoveredCount={recoveredCount.value}
                        deathCount={deathCount.value}
                        confirmedCount={confirmedCount.value}
                    />
                </div>
            </div>
        </>
    );
}
