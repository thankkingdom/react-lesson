import logo from './logo.svg';
import './App.css';
import { ColoredMessage } from './ColoredMessage';
import { useState, useEffect } from "react";

function App() {

  console.log('レンダリング' + new Date());

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    alert();

  }, [num]);

  const onClickButton = () => {
    setNum(num + 1);
    setNum2((a) => a + 1 );
  }
  const clear = () => {
    setNum(0);
    setNum2(0);
  }

  return (
    <div className="App">
      {/** console.log('test') */}
      <h1 style={{color: "red"}}>こんにちは！</h1>
      <ColoredMessage color="blue" message="お元気ですか？" />
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <button onClick={clear}>クリア</button>
      <p>{num}</p>
      <p>{num2}</p>
    </div>
  );
}

export default App;
