import useSWR from 'swr';
import axios from 'axios';

const fetcher = () => axios.get(`https://covid19.mathdro.id/api/countries`).then(data => data.data);

export default function useCountriesList(){
    const { data, error } = useSWR('/api/countries',fetcher);
    console.log(data);
    return {
        data,
        isLoading: !error && !data,
        isError:error,
    }
}