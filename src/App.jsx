
import NavBar from './component/navBar'
import { Routes,Route } from 'react-router-dom'
import HeroSection from './component/heroSection'



function App() {
 

  return (
    <>
    <div className='flex'>
      <NavBar></NavBar>
     
      <div className='flex flex-col flex-1 overflow-y-auto'>
        <Routes>
          <Route path='/' element={<HeroSection/>}></Route>
        </Routes>
      </div>
    </div>
     
    </>
  )
}

export default App
