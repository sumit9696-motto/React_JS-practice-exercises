import { useState } from 'react'
import Counter from './Components/Counter'
import { useContext } from 'react'
import { CounterContext } from './Context/Counter'

import './App.css'

function App() {
const counterState = useContext(CounterContext);
console.log("Contecxt",counterState);

  return (
    <>
     
      <h1>Contecxt API </h1> <br></br>
      <h3>Count : {counterState.count} </h3>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      
      
    </>
  )
}

export default App
