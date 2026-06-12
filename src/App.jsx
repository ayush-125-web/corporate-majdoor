import { Routes,Route } from 'react-router-dom'
import NavBar from './component/navBar'
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
     <ContextProvider>
        <div className='d-flex gap-5'>
          <NavBar></NavBar>
            <Routes>
               <Route path='/meetings' element={<Meeting meets={meets} setMeets={setMeets}/>}></Route>
               <Route path='/task' element={<Task/>}></Route>
            </Routes> 
        </div>
     </ContextProvider>
     
    </>
  )
}

export default App
