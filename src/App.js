import logo from './logo.svg';
import './App.css';

function App() {

  //CSS オブジェクト
  const contentStyle = {
    color: "bulue",
    fontSize: "20px"
  };

  const onClickButton = () => {
    alert();
  }

  return (
    <div className="App">
      {console.log('test')}
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
      <h1 style={{color: "red"}}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
}

export default App;
