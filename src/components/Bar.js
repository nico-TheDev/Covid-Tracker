import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart({
    recoveredCount,
    deathCount,
    confirmedCount,
}) {
    const data = {
        labels: ["Recovered", "Confirmed", "Deaths"],
        datasets: [
            {
                backgroundColor: ["#1F9D55", "#DE751F", "#CC1F1A"],
                borderWidth: 1,
                barThickness: 30,
                data: [recoveredCount, confirmedCount, deathCount],
            },
        ],
    };
    return (
        <Bar
            data={data}
            height={300}
            options={{
                maintainAspectRatio: false,
                responsive:true,
                legend: {
                  display:false
                }
            }}
        />
    );
}
