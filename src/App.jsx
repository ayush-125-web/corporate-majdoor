import { Routes,Route } from 'react-router-dom'
import NavBar from './component/navBar'
import HeroSection from './component/heroSection'
import AboutUs from './component/aboutUs'
import Meeting from './component/meetings'
import ContextProvider from './store/contextProvider'
import { BrowserRouter } from 'react-router-dom'



function App() {
 

  return (
    <>
    <div className='flex gap-4'>
      <NavBar></NavBar>
      <div className='flex flex-col flex-1 overflow-y-auto'>
        <Routes>
          <Route path='/' element={<HeroSection/>}></Route>
          <Route path='/about' element={<AboutUs/>}> </Route>
          <Route path='/meetings' element={<Meeting/>}></Route>
        </Routes>
      </div>
    </div>     
    </>
  )
}

export default App
