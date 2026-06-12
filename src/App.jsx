import { Routes,Route } from 'react-router-dom'
import NavBar from './component/navBar'
import Meeting from './component/meetings'
import ContextProvider from './store/contextProvider'
import { BrowserRouter } from 'react-router-dom'



function App() {
 

  return (
    <>
     <ContextProvider>
        <div className='d-flex gap-5'>
          <NavBar></NavBar>
          <BrowserRouter>
            <Routes>
               <Route path='/meetings' element={<Meeting/>}></Route>
            </Routes>
          </BrowserRouter>   
        </div>
     </ContextProvider>
     
    </>
  )
}

export default App
