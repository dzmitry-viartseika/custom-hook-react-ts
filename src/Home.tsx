import useInputValidation from './hooks/useInputValidation';

function Home(): JSX.Element {
    const name = useInputValidation('hello world', true)
    return (
        <div>
            <form>
                <input {...name} />
                {name.error && <span style={{ color: 'red'}}>{name.error}</span>}
            </form>
        </div>
    )
}

export default Home;
