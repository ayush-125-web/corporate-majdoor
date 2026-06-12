
import NavBar from './component/navBar'
import { Routes,Route } from 'react-router-dom'
import { useState } from 'react'
import Task from './component/task'
import taskData from './data/taskData'




function App() {

  const [tasks,setTasks]=useState(taskData)
  console.log(tasks);
  return (
    <>
      <div className='d-flex gap-4'>
        <NavBar></NavBar>
      <Routes>
        <Route path='/task' element={<Task tasks={tasks} setTasks={setTasks}/>}></Route>
      </Routes>
      </div>
    </>
  )
}

export default App
