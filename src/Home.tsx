import useInputValidation from './hooks/useInputValidation';
import {useTheme} from "./hooks/useTheme";


function Home(): JSX.Element {
    const name = useInputValidation('hello world', true);
    const { theme, toggleTheme } = useTheme('white');

    const handleChangeTheme = () => {
        toggleTheme();
    }

    return (
        <div className={`Home ${theme}`}>
            {/*<form>*/}
            {/*    <input {...name} />*/}
            {/*    {name.error && <span style={{ color: 'red'}}>{name.error}</span>}*/}
            {/*</form>*/}
            <button onClick={handleChangeTheme}>Swich mode</button>
        </div>
    )
}

export default Home;
