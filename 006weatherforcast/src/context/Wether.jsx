import {createContext,useContext,useState} from "react";
import { WeatherForecast ,WeatherForecastlocatation} from "../api";

const Weathercontext = createContext(null);

export const useWeather = (city) =>{
    return useContext(Weathercontext);
};



export const  WeatherProvider= (props)=>{
    const [data,setData]=useState(null);
   
    const[searchcity,setsearchCity]=useState(null);

 const fetchData= async ()=>{
    const response= await WeatherForecast(searchcity);
    // console.log("Data wether vala",response.city);
    
    setData(response);
    // console.log("Response",response.location.name);
 }  ; 
 const featchcurrentlocation = () =>{
    navigator.geolocation.getCurrentPosition((position) => {
        WeatherForecastlocatation(position.coords.latitude,position.coords.longitude)
        .then((data)=>setData(data));
        
    });
};

    return(
        <Weathercontext.Provider value={{data,searchcity,setsearchCity,fetchData,featchcurrentlocation}}> 
            {props.children}
        </Weathercontext.Provider>
    );
};