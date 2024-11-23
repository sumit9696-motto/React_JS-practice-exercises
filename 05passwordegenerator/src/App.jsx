import { useState, useCallback,useEffect ,useRef} from 'react'



function App() {
  const [length, setLength] = useState(7);
  const [character, setCharacter] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [password,setPassword]= useState("");

  const passwordref =useRef(null);
  const passGenerator= useCallback(() => {
 let pass=""
 let str ="ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstuvwxyz"

 if(numbers) str +="0123456789";
 if(character) str +="[]{}_=+~@#$%^&*()><?/";
for (let i = 1; i <=length; i++) {
 let char = Math.floor(Math.random() * str.length +1);
 pass += str.charAt(char);
  
}
setPassword(pass);


  },[length,character,numbers,setPassword]);
  const copypassToClickboard=useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=>{passGenerator()},[length,numbers,character,passGenerator])

  return (
    <>
      
    <h1 className='text-center text-white text-4xl '>Password Generator</h1>
    <div className="flex justify-center items-center my-8 py-3 w-full text-orange-500 bg-gray-800">
    
   <div className='mb-4 shadow rounded-lg flex overflow-hidden'>
    <input type='text' value={password} 
    className='outline-none w-full py-1 px-3' placeholder='password'
    ref={passwordref}
    readOnly />
    <button className=' rounded-xl'
    onClick={copypassToClickboard}>copy</button>
   </div>
   
   
   <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type="range" min={7} max={100} value={length} className='cursor-pointer' 
      onChange={(e)=> {setLength(e.target.value)}} />
      <label>length : {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input type="checkbox" defaultChecked={numbers} onChange={()=> {setNumbers((prev)=>!prev)}} />
      <label htmlFor='numberInput'>Numbers </label>
    
    </div>
    <div className='flex items-center gap-x-1'>
      <input type="checkbox" defaultChecked={character} onChange={()=> {setCharacter((prev)=>
      !prev)}} />
      <label htmlFor='characterInput'>Character</label>
    </div>

   </div>
    
    </div>
   
    
  </>
  )
}

export default App
