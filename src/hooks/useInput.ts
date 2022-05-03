import { useState } from "react";
import { ChangeEvent } from 'react';


interface IUseInput {
    value: string;
    onChange: (event: any) => void;
}

type Validator = (value: string) => boolean;

export const useInput = (initialValue: string, validator: Validator): IUseInput => {

    const [value, setValue] = useState<string>(initialValue);

    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        let isEditable = true;
        const { target: { value } } = event;

        if (typeof validator === 'function') {
            isEditable = validator(value);
        }
        if (isEditable) {
            setValue(value);
        }
    }

    return {
        onChange,
        value,
    };
};
