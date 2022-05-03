import { useInput } from "./hooks/useInput";

function App(): JSX.Element {
  const maxLen = (value: string): boolean => {
      return value.length <= 10;
  }
  const checkAt = (value: string) => !value.includes('@', 1);
  const name = useInput('wertey', maxLen);
  const email = useInput('@', checkAt);

  return (
    <div className={'App'}>
        <h1>Customs hooks</h1>
        {/*// or {...value} {...onChange}*/}
        <input type="text" placeholder={`Name`} value={name.value} onChange={name.onChange}/>
        <input type="text" placeholder={`Email`} value={email.value} onChange={email.onChange}/>
    </div>
  );
}

export default App;
