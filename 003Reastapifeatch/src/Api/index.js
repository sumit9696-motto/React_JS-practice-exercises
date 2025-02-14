export const getpost= async()=>{
   const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'GET',
    });
    return response.json();

}