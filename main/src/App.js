import React, {useState} from 'react'
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <h1>
        Todo List
      </h1>
    </div>
  );
}

export default App;
