import { useState } from 'react'
import './App.css'

function App() {
  const [active, setActive]=useState(true)
  const handleClick = () => {
   setActive(active=>!active);
  }
  

  return ( 
      <>
      <h1>switch Theme</h1>
    <div className="center" style={active? {background:'white'}:{background:'black'}}>
      <button
      onClick={handleClick}
      
      >
        SignUp
     </button>
    </div>
    </>
  )
      
      }
      
    
  


export default App
