import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import { getRandomUser } from './api'
import viteLogo from '/vite.svg'
import UserCard from './components/UserCard'
import './App.css'

function App() {
  const [userdata, setUserData] = useState(null);

  useEffect(() => {
    getRandomUser().then((user)=>setUserData(user.results[0]));

  },[]);
  const refreshUser = () => {
    getRandomUser().then((user)=>setUserData(user.results[0]));
  }

  return (
    <>
     
     
      <h1> Call REST API( JSON API ) </h1>
      { userdata &&<UserCard  data ={userdata} />}
      <button onClick={refreshUser}>Get New User</button>
     
       
     
      
    </>
  )
}

export default App
