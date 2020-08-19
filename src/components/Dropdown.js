import React from "react";
import useCountriesList from "../hooks/useCountriesList";

export default function Dropdown({ setCountry }) {
    const { data, isLoading, isError } = useCountriesList();

    if (isLoading) return null;

    if (isError) return "Cannot render dropdown";

    const handleChange = (e) => {
        console.log(e.target.value);
        if (e.target.value !== "world") {
            setCountry(e.target.value);
        } else {
            setCountry(null);
        }
    };
    return (
        <div className="relative mb-4">
            <select
                onChange={handleChange}
                onBlur={handleChange}
                className="w-full font-main text-xl py-2 px-4"
            >
                <option value="world">Global</option>
                {data.countries
                    .filter((item) => item.iso3)
                    .map((country) => (
                        <option value={country.iso3} key={country.iso3}>
                            {country.name}
                        </option>
                    ))}
            </select>
            <span className="block absolute top-0 right-0 bg-white h-full w-12 flex items-center justify-center pointer-events-none">
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </span>
        </div>
    );
}
