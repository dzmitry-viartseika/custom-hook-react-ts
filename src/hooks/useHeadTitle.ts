import {useEffect, useState} from 'react';

export const useHeadTitle = (initialValue: string) => {
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
