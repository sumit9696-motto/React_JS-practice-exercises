import React from "react";
import { useWeather } from "../context/Wether";

const Input =()=>{
    const weather  = useWeather();
    // console.log("Weather data",weather);
   
    return(
        <input type="text" className="input"
        placeholder="Search heare"
        value={weather.searchcity ||""}
        onChange={(e)=>weather.setsearchCity(e.target.value)}

        />
    );
};
export default Input;