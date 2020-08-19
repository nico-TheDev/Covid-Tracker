import React from "react";
import useGlobalData from "../hooks/useGlobalData";
import useCountryData from "../hooks/useCountryData";
import Placeholder from "./Placeholder";
import DataDisplay from "./DataDisplay";

export default function DataHolder({ country }) {
    const {
        data: globalData,
        isLoading: isLoadingGlobal,
        isError: isErrorGlobal,
    } = useGlobalData();

    const {
        data: countryData,
        isLoading: isLoadingCountry,
        isError: isErrorCountry,
    } = useCountryData(country);

    if (isErrorGlobal && isErrorCountry) return "Something went wrong";
    if (isLoadingGlobal || isLoadingCountry) return <Placeholder />;

    if (countryData) {
        const { recovered, deaths, confirmed, lastUpdate } = countryData;
        return (
            <DataDisplay
                recoveredCount={recovered}
                deathCount={deaths}
                confirmedCount={confirmed}
                lastUpdate={lastUpdate}
            />
        );
    }
    
    if (!countryData) {
        const { recovered, deaths, confirmed, lastUpdate } = globalData;
        return (
            <DataDisplay
                recoveredCount={recovered}
                deathCount={deaths}
                confirmedCount={confirmed}
                lastUpdate={lastUpdate}
            />
        );
    }
}
