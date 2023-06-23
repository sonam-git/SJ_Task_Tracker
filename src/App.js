import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks,setTasks] = useState([
    {
        id:1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:45pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Soccer Practice',
        day: 'June 5th at 2:45pm',
        reminder: false,
    },
    {
        id:3,
        text: 'Indepence Day Camping',
        day: 'July 4th at 10:00am',
        reminder: true,
    },
    {
        id:4,
        text: 'Labor Day Party',
        day: 'Sept 5th at 2:45pm',
        reminder: false,
    }
])
// Add Task
const addTask = (task) => {
 const id = Math.floor(Math.random()* 10000) + 1
 const newTask = {id, ...task}
 setTasks([...tasks, newTask])
}
// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}
// Toggle reminder
const taskReminder = (id) => {
  setTasks(tasks.map((task)=> 
  task.id === id ? {...task, 
  reminder: !task.reminder } : task ))
}
  return (
    <div className="container">
   <Header title = 'Task Tracker'
   onAdd={() => {
    setShowAddTask(!showAddTask)
   }}
   showAdd={showAddTask}/>
   {showAddTask && 
   <AddTask onAdd = {addTask}/>}
   { tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask}
   onToggle = {taskReminder}/>
   : 'No Task to show..' }
    </div>
  );
}

export default App;
