export const todo= async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos',{
        methpd:'GET',
    }); 
    return response.json();
};