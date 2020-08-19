import useSWR from 'swr';
import axios from 'axios';


export default function useGlobalData(){
    const fetcher = () => axios.get(`https://covid19.mathdro.id/api`).then(data => data.data);
    const { data, error } = useSWR('/api/',fetcher);
    console.log(data);
    return {
        data,
        isLoading: !error && !data,
        isError:error,
    }
}