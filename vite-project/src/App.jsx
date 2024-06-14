import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Headers from './components/Headers.jsx'
import './App.css'
import Logos from "./components/Logos.jsx"
import { Route, Routes } from 'react-router-dom'
import { useAuth } from './context/AuthContext.jsx'
import Chat from './pages/Chat.jsx'
import Logout from './pages/Logout.jsx'
import Login from './pages/Login.jsx'
function App() {
  console.log(useAuth()?.isLoggedIn)
  console.log("bye")
  const [count, setCount] = useState(0)
  
  return (
    
   <main> 
    <Logos/>
    <Routes>
      <Route path='/chat' element={<Chat/>} />
      {/* <Route path='/logout' element={<Logout/>} /> */}
      <Route path='/login' element={<Login/>} />
    </Routes>
    
    <Headers/>
   </main>    
  )
}

export default App
