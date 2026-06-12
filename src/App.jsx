import { Routes,Route } from 'react-router-dom'
import HeroSection from './component/heroSection'
import AboutUs from './component/aboutUs'
import Meeting from './component/meetings'
import ContextProvider from './store/contextProvider'
import { BrowserRouter } from 'react-router-dom'
import meetingData from './data/meetingData'
import { useState } from 'react'
import Task from './component/task'
import taskData from './data/taskData'
import NavBar from './component/navBar'



function App() {

  const[meets,setMeets]=useState(meetingData)
  const [tasks,setTasks]=useState(taskData)

  return (
    <>
    <div className='flex gap-4'>
      <NavBar></NavBar>
      <div className='flex flex-col flex-1 overflow-y-auto'>
        <Routes>
          <Route path='/' element={<HeroSection/>}></Route>
          <Route path='/about' element={<AboutUs/>}> </Route>
          <Route path='/meetings' element={<Meeting meets={meets} setMeets={setMeets}/>}></Route>
          <Route path='/task' element={<Task tasks={tasks} setTasks={setTasks}/>}></Route>
        </Routes>
      </div>
    </div> 
    </>
  )
}

export default App
