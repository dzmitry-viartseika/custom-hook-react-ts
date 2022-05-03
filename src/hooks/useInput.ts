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

    return {
        onChange,
        value,
    };
};
