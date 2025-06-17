export const list= async ()=>{
    const response=  await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10',{
        method:'GET',
    })
    const  data= await response.json()
    return data;
    
   

      
      
}