import { useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [character, setCharacter] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [password,setPassword]= useState(false);

  const passgenerator=()=>{
    
  }

  return (
    <>
      
      <h1 className='text-center text-white text-4xl '>Password Generator</h1>
     
      
    </>
  )
}

export default App
