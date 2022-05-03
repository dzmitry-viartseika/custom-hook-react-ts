import {useEffect, useState} from 'react';

interface IPropUseHeadTitle {
    title: string;
}

export const useHeadTitle = (initialValue: string): IPropUseHeadTitle => {
    const [title, setTitle] = useState<string>(initialValue);

    const updateTitle = () => {
        const htmlTitle = document.querySelector('title') as HTMLTitleElement;
        htmlTitle.innerText = title;
    }

    useEffect(() => {
        updateTitle()
    }, [title]);

    return {
        title,
    }
}
