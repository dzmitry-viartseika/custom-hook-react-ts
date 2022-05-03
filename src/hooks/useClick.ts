import {useEffect, useRef} from 'react';

type IParamsUseClick = () => void;

export const useClick = (onClick: IParamsUseClick) => {
    if (typeof onClick !== 'function') return //
    const element = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (element.current) {
            element.current.addEventListener('click', onClick);
        }

        return () => {
            if (element.current) {
                element.current.removeEventListener('click', onClick)
                }
            }
    }, []);

    return element;
}
