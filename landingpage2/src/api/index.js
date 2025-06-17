export const list= async ()=>{
    const response=  await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5',{
        method:'GET',
    })
    const  data= await response.json()
    return data;
    
   

      
      
}