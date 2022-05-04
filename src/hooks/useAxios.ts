import defaultAxios from 'axios';

const useAxios = (options: any, axiosInstance = defaultAxios) => {
    if (!options.url) return;

}

export default useAxios;
