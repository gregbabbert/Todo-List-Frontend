import React, {useState} from 'react'
import './App.css';
import ListItem from './components/ListItem/ListItem';

function App() {
  const [tasks, setTasks] = useState([{title: "Wash Car", description: "Bedroom needs to be dusted and vacuumed."}, {title: "Walk Dog", description: "The dog needs to be walked twice a day."}]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('')
  return (
    <div className="App">
      <h1>
        Todo List
      </h1>
      {tasks.map((task, i) => <ListItem key={task.title + i} task={task}/>)}
      <h5>Title</h5>
      <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} >
      </input>
      <h5>Description</h5>
      <textarea style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} value={newDescription} onChange={(e) => setNewDescription(e.target.value)} ></textarea>
      <button type="button" onClick={ () => {
        if (newTitle.trim() && newDescription.trim()) {
          setTasks([...tasks, {title: newTitle, description: newDescription}])
          setNewTitle('')
          setNewDescription('')
        }
      }} >Create</button>
    </div>
  );
}

export default App;
