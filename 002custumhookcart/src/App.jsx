import { useState } from 'react'
import Item from './Components/Item'
import Cart from './Components/Cart'

import './App.css'

function App() {
  

  return (
    <>
     
      <h1>Cart Item </h1>
      <Item  name="T-shirt" price={1000}/>
      <Item  name="pen" price={3000}/>
      <Item  name="Top toys" price={7000}/>
      <Item  name="llmns" price={9000}/>
      <Cart/>
     
    </>
  )
}

export default App
