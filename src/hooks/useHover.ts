import {useEffect, useRef} from 'react';

type IParamsUseClick = () => void;

export const useHover = (useHover: IParamsUseClick) => {
    if (typeof useHover !== 'function') return //
    const element = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (element.current) {
            element.current.addEventListener('mouseenter', useHover);
        }

        return () => {
            if (element.current) {
                element.current.removeEventListener('mouseenter', useHover)
                }
            }
    }, []);

    return element;
}
