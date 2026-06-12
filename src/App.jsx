
import NavBar from './component/navBar'
import { Routes,Route } from 'react-router-dom'
import HeroSection from './component/heroSection'
import AboutUs from './component/aboutUs'
import Meeting from './component/meetings'
import ContextProvider from './store/contextProvider'
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import meetingData from './data/meetingData'
import Task from './component/task'



function App() {

  const[meets,setMeets]=useState(meetingData)
 

  return (
    <>
    <div className='flex gap-4'>
      <NavBar></NavBar>
      <div className='flex flex-col flex-1 overflow-y-auto'>
        <Routes>
          <Route path='/' element={<HeroSection/>}></Route>
          <Route path='/about' element={<AboutUs/>}> </Route>
          <Route path='/meetings' element={<Meeting meets={meets} setMeets={setMeets}/>}></Route>
          <Route path='/task' element={<Task/>}></Route>
        </Routes>
      </div>
    </div> 
    </>
  )
}

export default App
