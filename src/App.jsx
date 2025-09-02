import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Agence from './pages/Agence'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-white'>
        <Routes>
          <Route path = '/' element={<Home/>}/> 
          <Route path = '/agence' element={<Agence/>}/> 
          <Route path = '/project' element={<Project/>}/> 

        </Routes>
      </div>
    </>
  )
}

export default App
