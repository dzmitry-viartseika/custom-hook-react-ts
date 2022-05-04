import useInputValidation from './hooks/useInputValidation';
import {useTheme} from "./hooks/useTheme";
import {useState} from "react";
import useToggle from "./hooks/useToggle";
import useWindowWidth from "./hooks/useWindowWidth";


function Home(): JSX.Element {
    const name = useInputValidation('hello world', true);
    const { theme, toggleTheme } = useTheme('white');
    const { value, toggleValue } = useToggle();
    const onSmallScreen = useWindowWidth();

    const handleChangeTheme = () => {
        toggleTheme();
    }

    return (
        <div className={`Home ${theme}`}>
            <div>
                { onSmallScreen ? 'small' : 'large' }
            </div>
            <button onClick={toggleValue}>Toggle Content</button>
            {
                value ? <div>
                    Content
                </div> : null
            }
            <form>
                <input {...name} />
                {name.error && <span style={{ color: 'red'}}>{name.error}</span>}
            </form>
            <button onClick={handleChangeTheme}>Swich mode</button>
        </div>
    )
}

export default Home;
