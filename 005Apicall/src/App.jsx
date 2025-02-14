import { useState ,useEffect} from 'react'
import TodoList from './components/Todolist'
import { todo } from './api'

import './App.css'

function App() {
  const [data, setData] = useState(null);



  useEffect ( () =>{
  todo().then((todos)=>setData(todos));
  },[]);

  return (
    <>
     
      <h1>Todo List </h1>
      
      
      <table className="todo-table">
    <thead>
      <tr>
        <th>Sn.</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
    { data ? data.map(e =><TodoList  key ={e.id} sn={e.id} title={e.title} />) :<p>no data </p>}


        
      
    </tbody>
  </table>
      
      
    </>
  )
}

export default App
