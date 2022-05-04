import {useEffect, useState} from "react";

export const useTheme = (initialTheme = 'light') => {
    const [theme, setTheme] = useState<string>(initialTheme);

    const toggleTheme = () => {
        if (theme !== "dark") {
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
        }
    }, []);

    return {
        theme,
        toggleTheme,
    }
};
