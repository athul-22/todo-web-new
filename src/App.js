import React, { useState } from 'react';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const clientId = "938054737950-sa3dukd5ssvjhund0f4pk3e28r6ncras.apps.googleusercontent.com";

function App() {
  // STATE HOOK

  const [task, setTask] = useState("");
  const [item, setItem] = useState([]);

  const [emoji, setEmoji] = useState("");

  function addTask() {
    // EMPTY INPUT
    if (!task) {
      // alert("ENTER AN ITEM");
      toast.error("EMPTY TASK !")
    }
    // TASK ADDING 
    else {
      toast.success("TASK ADDED SUCCESSFULLY");
      console.log(task);

      const items = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        icon: emoji,
      };

      setItem(oldList => [...oldList, items]);
      setTask("");
    }
  }

  // DELETE BUTTON
  function removeTask(id) {
    const newArray = item.filter(items => items.id !== id);
    setItem(newArray);
    toast.success("Task Removed Successfully");
  }
  
  return (
    <div className="App">

      {/* 1. HEADER */}
      <h1 className='header'> TODO LIST</h1>
      
      {/* 2. INPUT BOX AND BUTTON */}
      <div className='popup'>
        <select id='emoji' value={emoji} onChange={e => setEmoji(e.target.value)}>
          <option value="⭐️">⭐️ STAR</option>
          <option value="📌">📌 PIN</option>
          <option value="❤️">❤️ FAV</option>
        </select>
        <input id='input' value={task} type="text" placeholder="Task Name" onChange={e => setTask(e.target.value)} />
        <button id='btn' onClick={addTask}>ADD TASK</button>
      </div>

      {/* 3. ORDER LIST OF TASK */}
      <ul>
        {item.map(items => {
          return (
            <li id='task' key={items.id}>{items.icon} {items.value} <button id='close' onClick={() => removeTask(items.id)}>❌</button> </li>
          )
        })}
      </ul>
      <Toaster />
    </div>
  );
}

export default App;
