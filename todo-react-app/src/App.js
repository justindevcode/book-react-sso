import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import React,{useState} from 'react';

function App() {
  const [items, setItem] = useState([{
    id: "0",
    title: "Hello World 1",
    done: true
  },
  {
    id: "1",
    title: "Hello World 2",
    done: true
  }
])

  let todoItems = items.length > 0 && items.map((item) => <Todo item={item} key={item.id} />)
  return (
    <div className="App">
      {todoItems}
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
