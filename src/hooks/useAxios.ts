import defaultAxios, {AxiosResponse} from 'axios';
import {useEffect, useState} from 'react';

const useAxios = (options: any, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    })

    const [ trigger, setTrigger] = useState<number>(0)

    if (!options.url) return;

    useEffect(() => {
        axiosInstance(options).then((response: AxiosResponse) => {
            setState({
                ...state,
                data: response.data,
                loading: false,
            })
        }).catch((e) => {
            console.error(e);
            setState({
                ...state,
                error: e,
                loading: false,
            })
        })
    }, [trigger]);


    const refetch = () => {
        setState({
            ...state,
            loading: true,
        });
        setTrigger(Date.now());
    }

    return {
        ...state,
        refetch
    };
}

export default useAxios;
