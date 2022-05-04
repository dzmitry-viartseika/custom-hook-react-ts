import {useEffect, useState} from 'react';

export const useNetwork = (onChange?: (value: boolean) => void) => {
    console.log('navigator.onLine', navigator.onLine);
    const [status, setStatus] = useState<boolean>(navigator.onLine);

    const handleChange = () => {
        if (onChange instanceof Function) {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener('online', handleChange);
        window.addEventListener('offline', handleChange);

        return () => {
            window.removeEventListener('online', handleChange);
            window.removeEventListener('offline', handleChange);
        }
    }, [])

    return status;
}
