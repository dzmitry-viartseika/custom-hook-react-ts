import {useRef, useState} from 'react';

export const useFullScreen = () => {
    const element = useRef<HTMLImageElement>(null);
    const triggerFullScreen = () => {
        if (element.current) {
            element.current.requestFullscreen();
        }
    }

    const exitFull = () => {
        document.exitFullscreen();
    }

    return {
        element,
        triggerFullScreen,
        exitFull,
    };
}
