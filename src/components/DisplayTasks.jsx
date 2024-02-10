export default function DisplayTasks({tasks}){
    //testing that tasks arrived in component
    console.log(tasks)
    //map through the array to include all previously entered tasks and add new one
let taskItems = tasks.map((task,index)=>{
    return(
           <p key={index}>{task}</p>
    )
})
console.log(taskItems)
return(
    <div>
            {taskItems}
    </div>
)
}