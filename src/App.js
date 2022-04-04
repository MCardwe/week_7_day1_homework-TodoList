
import './App.css';
import React, {useState} from 'react';


function App() {

  const [tasks, setTasks] = useState([
    {name: 'Buy Shopping', priority: 'low'}, {name: 'Clean bathroom', priority: 'high'},{name: "Car's MOT", priority: 'low'}
  ]);

  const [newTask, setNewTask] = useState ('');
  const [taskPriority, setPriority] = useState('');

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  }

  const handlePriority = (event) => {
    setPriority(event.target.value);
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({name : newTask, priority: taskPriority});
    setTasks(copyTasks);
    setNewTask('')
  }

  const taskNodes = tasks.map((task, index) => {
    return (
      <li key={index} className={task.priority == 'high' ? 'high-priority': 'low-priority'}>
        <span>{task.name}</span>
      </li>
    )
  })
  return (
    <>
      <h1>To Do's</h1>
      <form onSubmit = {saveNewTask}>
        <label htmlfor='new-task'>New Task: </label>
        <input type='text' value={newTask} onChange={handleNewTask}/>

        <label> <input name='priority' type='radio' value='high' onChange={handlePriority}></input>High</label>

        <label> <input name='priority' type='radio' value='low' onChange={handlePriority}></input>Low</label>
        <button type='submit' value ='Save Task'></button>
      </form>

      <ul>
        {taskNodes}
      </ul>
    </>
  );
}

export default App;
