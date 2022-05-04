import { useInput } from "./hooks/useInput";
import {useTabs} from "./hooks/useTabs";
import {useHeadTitle} from "./hooks/useHeadTitle";
import { useRef } from 'react';
import {useClick} from "./hooks/useClick";
import {useConfirm} from "./hooks/useConfirm";
import {usePreventLeave} from "./hooks/usePreventLeave";
import {useLocalStorage} from "./hooks/useLocalStorage";
import {useNetwork} from "./hooks/useNetwork";
import {useScroll} from "./hooks/useScroll";
import {useFullScreen} from "./hooks/useFullScreen";
import {useNotification} from "./hooks/useNotification";

const style  = {
    'height': '1500px'
}

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
  const headTitle = useHeadTitle('Main page for Custom hooks');
    const sayHello = (): void => {
        console.log('hello');
    }
  const title = useClick(sayHello);

  const name = useInput('wertey', maxLen);
  const email = useInput('@', checkAt);
  const { currentItem, changeTab } = useTabs(0, tabContent);
  const test = useLocalStorage('wertey', 'default value');
    const handleNetworkStatus = (status: boolean): void => {
        console.log('handleNetworkStatus', status);
    }
  const status = useNetwork(handleNetworkStatus);
  const triggerNotification = useNotification('Could I send you notification?', {
      body: 'Как ты относишься к спаму?',
      image: 'https://habrastorage.org/r/w1560/webt/sj/uf/xu/sjufxuqiadew2_zg3veuhlac7em.png'
  });
  const deleteAll = () => {
      console.log('Удалили всё на свете');
  }
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const confirmDelete = useConfirm('Вы действительно что хотите это удалить?', deleteAll);
  const { y } = useScroll();
  const { element, triggerFullScreen, exitFull } = useFullScreen();
  return (
    <div className={'App'} style={style}>
        <h1>Customs hooks</h1>
        <div>
            <h2>useNotification</h2>
            <button onClick={triggerNotification}>Отправить уведомление</button>
        </div>
        <div onClick={exitFull}>
            <h2>useFullScreen</h2>
            <img ref={element} src="https://habrastorage.org/r/w1560/webt/sj/uf/xu/sjufxuqiadew2_zg3veuhlac7em.png" alt="image"/>
            <button onClick={triggerFullScreen}>FULL SCREEN IMAGE</button>
        </div>
        <div>
            <h2>useScroll</h2>
            y={y}
            <h1 style={{color: y > 30 ? 'red' : 'blue'}}>Say hello UseScroll</h1>
        </div>
        <div>
            <h2>useNetwork</h2>
            <h3>{ status ? 'Онлайн' : 'Офлайн' }</h3>
        </div>
        <div>
            <h2>UseLocalStorage</h2>
            <input type="text" value={test.storedValue} onChange={(e) => test.setValue(e.target.value)}/>
        </div>
        <div>
            <h2>useConfirm</h2>
            <button onClick={confirmDelete}>Delete</button>
        </div>
        <div>
            <h2>usePreventLeave</h2>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>UnProtect</button>
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
