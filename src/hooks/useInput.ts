import { useState } from "react";
import { ChangeEvent } from 'react';


interface IUseInput {
    value: string;
    onChange: (event: any) => void;
}

export const useInput = (initialValue: string): IUseInput => {

    const [value, setValue] = useState<string>(initialValue);

    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    }

    // const isBrowser: boolean = typeof window !== 'undefined';
    //
    // const [scrollY, setScrollY] = useState<number>(0);
    //
    // const handleScroll = () => {
    //     const currentScrollY: number = isBrowser ? window.scrollY : 0;
    //     setScrollY(currentScrollY);
    // };
    //
    // useEffect( () => {
    //     window.addEventListener('scroll', handleScroll, {passive: true});
    //
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);
    //
    return {
        onChange,
        value,
    };
};
