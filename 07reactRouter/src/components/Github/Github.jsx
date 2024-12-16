import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    
//     const [data,setData]=useState([]);
//     useEffect(()=>{
//         fetch('https://api.github.com/users/sumit9696-motto')
//         .then(response=>response.json()
//     .then(data=>{console.log(data)
//         setData(data)
//     })
// )
//     },[])

    return(
        <>
        <div className="text-center m-4 text-white
        bg-gray-700 p-4 text-3xl">github followers :{data.followers}
        <div>Name : {data.name}</div>
        
        </div>
        <img src={data.avatar_url} alt='Git pic' className="text-center "width={300}/>
        </>
    )
}
export default Github

export const githubInfoLoader=async()=>{
    const response= await fetch('https://api.github.com/users/sumit9696-motto')
    return response.json()
}