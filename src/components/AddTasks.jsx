import { useState } from "react";

export default function AddTasks({setTasks}){
    const [newTaskInput,setNewTaskInput] = useState("");
    //set a function that sets the tasks and clears the input after
    function setAndClearInput(){
        setTasks(oldTasks => [...oldTasks, newTaskInput])
        setNewTaskInput("");
    }
    return(
    <>
    <div>
        <h1 id="welcome">Hi! Please enter a task!</h1>
    </div>
    <div>
       <input id="tasks" value={newTaskInput} onChange={(ev)=>setNewTaskInput(ev.target.value)}/>
       <div>
            <button onClick ={()=>setAndClearInput()}>Add Tasks</button>
       </div>
    </div>
    </>
    )
}