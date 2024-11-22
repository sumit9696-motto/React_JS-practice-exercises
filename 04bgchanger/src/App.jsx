import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     
      
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        {/* <h1 className="text-white text-center">Vite + React</h1> */}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex-wrap gap-3 justify-center bg-white rounded-xl p-3 ">
            <button className="outline-none px-4 " style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>red</button>
            <button className="outline-none px-4" style={{backgroundColor:"green"} }onClick={()=>setColor("green")}>green</button>
            <button className="outline-none " style={{backgroundColor:"yellow"}}onClick={()=>setColor("yellow")}>yellow</button>
            <button className="outline-none " style={{backgroundColor:"blue"}}onClick={()=>setColor("blue")}>blue</button>
            <button className="outline-none " style={{backgroundColor:"hotpink"}}onClick={()=>setColor("hotpink")}>hotpink</button>
            </div>
        </div>
        
        </div>
       
      
    </>
  )
}

export default App
