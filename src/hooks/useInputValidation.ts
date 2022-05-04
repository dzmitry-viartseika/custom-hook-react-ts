import { useState } from "react";

const useInputValidation = (initial: string, required: boolean) => {
    const [value, setValue] = useState<string>(initial);
    const [error, setError] = useState<null | string>(null);

    return {
        value,
        onBlur: (event: { target: HTMLInputElement }) => {
            if (!event.target.value && required) setError('Required field');
            else setError(null);
        },
        onChange: (event: { target: HTMLInputElement }) => setValue(event.target.value),
        error
    };
};

export default useInputValidation
