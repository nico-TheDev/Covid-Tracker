import useSWR from "swr";
import axios from "axios";

export default function useCountryData(country) {
    const fetcher = () =>
        axios
            .get(`https://covid19.mathdro.id/api/countries/${country}`)
            .then((data) => data.data);
    const { data, error } = useSWR(`/api/countries/${country}`, fetcher);
    console.log(data);
    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
}
