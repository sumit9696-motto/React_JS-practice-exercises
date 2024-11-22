import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter=2;
  const addValue=()=>{
    console.log(counter);
    counter=counter+1;
  }
  return (
    <>
      
      <h1>vite+ React</h1>
      <h2>counter vale : {counter}</h2>

      <button  onClick={addValue}>add to click</button>&nbsp;

      <button>remove to click </button>
      
      
    </>
  )
}

export default App
