import { useEffect } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from './components/Card'
import Button from './components/Button'
import Input from './components/Input'
import { useWeather } from './context/Wether'


import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const wether = useWeather();
  console.log("Wether hai",wether);

  useEffect(() => {
// get the current location of the user
wether.featchcurrentlocation();
  },[]);


  return (
    <>
      
      <h1>Weather forcast</h1>
     
      
      <Input />
      <Button value="Search" onClick={wether.fetchData} />
       <Card />
 
      <Button value="Refresh"  onClick={wether.featchcurrentlocation} />
     
      
      
    </>
  )
}

export default App
