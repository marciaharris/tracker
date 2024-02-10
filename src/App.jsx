import DisplayTasks from "./components/DisplayTasks"
import AddTasks from "./components/AddTasks"
import './App.css';
import { useState } from "react";

export default function App (){
  //initiating state of empty array
  const [tasks, setTasks] = useState([]); 
  return(
    <div>
      <AddTasks setTasks={setTasks}/>
      <DisplayTasks tasks={tasks}/>
    </div>
  )
}
