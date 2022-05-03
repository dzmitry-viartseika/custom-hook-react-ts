import { useState } from "react";

interface ITabItem {
    id: number;
    title: string;
    content: string;
}

interface IUseTabs {
    currentItem: ITabItem;
    changeTab: (tabIndex: number) => void;
}

export const useTabs = (initialTab: number, allTabs: ITabItem[]): IUseTabs => {
    const [currentIndex, setCurrentIndex] = useState<number>(initialTab);

    const changeTab = (value: number) => {
        console.log('value', value);
        setCurrentIndex(value);
    }

    return {
        currentItem: allTabs[currentIndex],
        changeTab,
    }
}
