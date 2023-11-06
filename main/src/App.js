import React, {useState} from 'react'
import './App.css';
import ListItem from './components/ListItem/ListItem';

function App() {
  const [tasks, setTasks] = useState([{title: "Wash Car", description: "Bedroom needs to be dusted and vacuumed."}, {title: "Walk Dog", description: "The dog needs to be walked twice a day."}]);
  return (
    <div className="App">
      <h1>
        Todo List
      </h1>
      {tasks.map((task, i) => <ListItem key={task.title + i} task={task}/>)}
    </div>
  );
}

export default App;
