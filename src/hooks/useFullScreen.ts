import {useRef, useState} from 'react';

export const useFullScreen = () => {
    const element = useRef<HTMLImageElement>(null);
    const triggerFullScreen = () => {
        if (element?.current?.requestFullscreen) {
            element?.current.requestFullscreen();
        }
        // else if (element.current.mozRequestFullscreen) {
        //     element.current.mozRequestFullscreen();
        // } else if (element.current.webkitRequestFullscreen) {
        //     element.current.webkitRequestFullscreen();
        // } else if (element.current.msRequestFullscreen) {
        //     element.current.msRequestFullscreen();
        // }
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
