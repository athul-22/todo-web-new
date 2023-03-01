import React, { useState , useRef, useEffect} from 'react';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import Profile from './Profile';


function App() {
  // STATE HOOK
  const [task, setTask] = useState("");
  const [item, setItem] = useState([]);
  const [emoji, setEmoji] = useState("");
  const [oldArr , setOldarr] = useState([]);

  const [lengthArr , setLengthArr ] = useState("");
  
  const select = useRef();
 
  function addTask() {
    setOldarr(item)
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
      console.log(item.length);
      setLengthArr(item.length);
      console.log(lengthArr);
    }
  }

  // DELETE BUTTON
  function removeTask(id) {
    const newArray = item.filter(items => items.id !== id);
    setItem(newArray);
    setOldarr(newArray);
    toast.success("Task Removed Successfully");
  }

  function allFun(id){
    console.log(oldArr)
    setItem(oldArr);
  }

  function loveFun(id){
    setItem(oldArr);
    const result = item.filter(items => items.icon === "❤️");
    console.log(result);
    setItem(result);
  }

  function starFun(id){
    setItem(oldArr);
    const result = item.filter(items => items.icon === "⭐️");
    console.log(result);
    setItem(result);
  }

  function pinFun(id){
    setItem(oldArr);
    const result = item.filter(items => items.icon === "📌");
    console.log(result);
    setItem(result);
  }

  function taskCompleted(id){
    let task = document.getElementById("task");
    task.style.color = "red";
  }

  return (
    <div className="App">
     
      {/* 1. HEADER */}
      <Profile taskNo={item.length} />
      <h1 className='header'> TODO LIST</h1>
      
      <div className='filterbtns'>
        <button id='filter-btn' onClick={allFun}>ALL</button>
        <button id='filter-btn' onClick={loveFun}>❤️</button>
        <button id='filter-btn' onClick={pinFun}>📌</button>
        <button id='filter-btn' onClick={starFun}>⭐️</button>
    </div>


      {/* 2. INPUT BOX AND BUTTON */}
      <div className='popup'>
        <select ref={select} id='emoji' value={emoji} onChange={e => setEmoji(e.target.value)}>
          <option value="⭐️">⭐️ STAR</option>
          <option value="📌">📌 PIN</option>
          <option value="❤️">❤️ FAV</option>
          {/* <option value="📕">📕 STUDY</option> */}
        </select>
        <input id='input' value={task} type="text" placeholder="Task Name" onChange={e => setTask(e.target.value)}  />
        <button id='btn' onClick={addTask}>ADD TASK</button>
      </div>

      {/* 3. ORDER LIST OF TASK */}
      <ul style={{textDecoration:'lineThrough',}}>
        {item.map(items => {
          return (
            <li onClick={taskCompleted}  id='task' key={items.id}>{items.icon} {items.value} <button id='close' onClick={() => removeTask(items.id)}>❌</button> </li>
          )
        })}
      </ul>

      <Toaster />
    </div>
  );
}

export default App;
