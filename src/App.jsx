import { useState } from 'react'
import './App.css'
import Cards from './Componets/Cards/Cards'
import Navbar from './Componets/Navbar/navbar'
function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
     <Cards></Cards>
   
     
    </>
  )
}

export default App
