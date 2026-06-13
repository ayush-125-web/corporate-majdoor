
import NavBar from './component/navBar'
import { Routes,Route } from 'react-router-dom'
import HeroSection from './component/heroSection'
import AboutUs from './component/aboutUs'



function App() {
 

  return (
    <>
    <div className='flex gap-4'>
      <NavBar></NavBar>
      <div className='flex flex-col flex-1 overflow-y-auto'>
        <Routes>
          <Route path='/' element={<HeroSection/>}></Route>
          <Route path='/about' element={<AboutUs/>}> </Route>
        </Routes>
      </div>
    </div>     
    </>
  )
}

export default App
