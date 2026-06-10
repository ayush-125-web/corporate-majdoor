
import NavBar from './component/navBar'
import AboutUs from './component/aboutUs'
import { Routes,Route } from 'react-router-dom'



function App() {
 

  return (
    <>
     <div className='d-flex gap-4'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/about-us' element={<AboutUs/>}> </Route>
      </Routes>
      
     </div>
     
    </>
  )
}

export default App
