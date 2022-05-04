import { useState } from 'react';

export const useLocalStorage = (key: string, initialValue: string) => {
    const [storedValue, setStoredValue] = useState<string>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (e) {
            console.error(e);
            return initialValue;
        }
    });

    const setValue = (value: any): void => {
       try {
           console.log('value instanceof Function', value instanceof Function);
           console.log('==', value === 'function');
           const valueToStore = value instanceof Function ? value(storedValue) : value;
           setStoredValue(valueToStore);
           window.localStorage.setItem(key, JSON.stringify(valueToStore));
       } catch (e) {
           console.error(e);
       }
    }

    return {
        storedValue,
        setValue
    };
}

