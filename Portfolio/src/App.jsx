import Home from "./Project/Home/About"
import Navbar from './Project/Navbar/Navbar'
import Project from './Project/Projects/Project'
import { Suspense, useState } from "react"
import Loading from './Project/Preloader/Preloader'
import Skills from './Project/Skills/Skills'
import './Project/Skills/Skills.css'
import Contact from './Project/Contact/Contact'

import './App.css'
const App = () => {
  const [load ,setLoad] = useState(true)
  setTimeout(() => {
    setLoad(false)
  }, 2500);
  return ( 
    <div >   
     {
      load? (<Loading/>):(
        <Suspense fallback={<div>Loading...</div>}>
        <Navbar/>
        <Home/>
        <Project/>
        <Skills/>
        <Contact/>
     </Suspense>
      )
     }    
   </div>
  )
}

export default App


