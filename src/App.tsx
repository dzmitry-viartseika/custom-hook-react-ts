import { useInput } from "./hooks/useInput";
import {useTabs} from "./hooks/useTabs";
import {useHeadTitle} from "./hooks/useHeadTitle";
import { useRef } from 'react';
import {useClick} from "./hooks/useClick";
import {useConfirm} from "./hooks/useConfirm";

const tabContent = [
    {
        id: 1,
        title: 'Раздел 1',
        content: 'Здесь передается контент для раздела 1'
    },
    {
        id: 2,
        title: 'Раздел 2',
        content: 'Здесь передается контент для раздела 2'
    },
]

function App(): JSX.Element {
  const maxLen = (value: string): boolean => {
      return value.length <= 10;
  }
  const checkAt = (value: string) => !value.includes('@', 1);
  const headTitle = useHeadTitle('Загрузка...');
    const sayHello = (): void => {
        console.log('hello');
    }
  const title = useClick(sayHello);

  const name = useInput('wertey', maxLen);
  const email = useInput('@', checkAt);
  const { currentItem, changeTab } = useTabs(0, tabContent);

  const deleteAll = () => {
      console.log('Удалили всё на свете');
  }

  const confirmDelete = useConfirm('Вы действительно что хотите это удалить?', deleteAll);

  return (
    <div className={'App'}>
        <h1>Customs hooks</h1>
        <div>
            <h2>useConfirm</h2>
            <button onClick={confirmDelete}>Delete</button>
        </div>
        {/*// or {...value} {...onChange}*/}
        <input type="text" placeholder={`Name`} value={name.value} onChange={name.onChange}/>
        <input type="text" placeholder={`Email`} value={email.value} onChange={email.onChange}/>


        <div>
            <h2>UseTabs</h2>
            <div>
                {tabContent.map((tab, index) => (
                    <button
                        key={tab.id}
                        onClick={() => changeTab(index)}
                    >{ tab.title }</button>
                ))}
                currentTab={currentItem.content}
            </div>
        </div>

        <div>
            <h2>useClick</h2>
            <h3 ref={title}>Привет!</h3>
        </div>
    </div>
  );
}

export default App;
