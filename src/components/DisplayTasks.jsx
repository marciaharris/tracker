import Card from './Card'

export default function DisplayTasks({ tasks }) {
  //map through the array to include all previously entered tasks and add new one
  let taskItems = tasks.map((task) => {
    return <Card key={task}task={task} />
  })
  return <div>{taskItems}</div>
}
