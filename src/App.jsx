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
import contacts from './data/contacts'
import favContacts from './data/favContact'
import Contacts from './component/contacts'



function App() {

  const[meets,setMeets]=useState(meetingData)
  const [tasks,setTasks]=useState(taskData)
  const [conts,setContacts]=useState(contacts)
  const [favConts,setFavContacts]=useState(favContacts)


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
          <Route path='/contacts' element={<Contacts conts={conts} setContacts={setContacts} favContacts={favContacts} setFavContact={setFavContacts}/>}></Route>
        </Routes>
      </div>
    </div> 
    </>
  )
}

export default App
