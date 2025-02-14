import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { getpost } from './Api'
import PostCard from './components/PostCard'
function App() {
  const [data, setData] = useState(null);
  
  useEffect(()=>{
    getpost().then((posts) =>setData(posts));
  },[])

  return (
    <>
      
      <h1>Call REST API( JSON API ) </h1>
      {
        data ? data.map(e => <PostCard title={e.title} body={e.body}/>):<p>no data</p>
      }
      
      
    </>
  )
}

export default App
