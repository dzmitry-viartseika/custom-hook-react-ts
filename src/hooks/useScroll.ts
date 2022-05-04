import {useEffect, useState} from 'react';

interface IUseScroll {
    x: number;
    y: number;
}

export const useScroll = () => {
    const [state, setState] = useState<IUseScroll>({
        x: 0,
        y: 0,
    });

    const handleScroll = () => {
        setState({
            x: window.scrollX,
            y: window.scrollY,
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return state;
}
