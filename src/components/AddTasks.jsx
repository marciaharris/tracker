export default function AddTasks({setTasks}){
    //set a function that sets the tasks and clears the input after
    function setAndClearInput(){
        let inputValue = document.getElementById('tasks');
        setTasks(oldTasks => [...oldTasks, inputValue.value])
        //setTasks({task:"",img:,})
//cannot figure out how to clear the input value for new task
// .reset not working, assigning it to empty string wont allow new inputs
        let inputs =document.getElementById("input");
    }
    return(
    <div>
       <input id="tasks"></input>
       <div>
            <button onClick ={()=>setAndClearInput()}>Add Tasks</button>
       </div>
    </div>)
}