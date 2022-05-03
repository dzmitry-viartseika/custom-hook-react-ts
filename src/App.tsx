import { useInput } from "./hooks/useInput";

function App(): JSX.Element {

  const name = useInput('wertey');
    console.log('name', name)

  return (
    <div className={'App'}>
        <h1>Customs hooks</h1>
        {/*// or {...value} {...onChange}*/}
        <input type="text" placeholder={`Name`} value={name.value} onChange={name.onChange}/>
    </div>
  );
}

export default App;
