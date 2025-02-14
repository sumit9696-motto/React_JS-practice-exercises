const basURL="https://api.weatherapi.com/v1/current.json?key=0886446c34e6415e81990847250202";

export const WeatherForecastlocatation = async(lat,lon)=>{
     const response =await fetch(`${basURL}&q=${lat},${lon}&aqi=yes`);
     return await response.json();
    
     
}
// // console.log("Response",WeatherForecast(name.delhi));

const baseURL = "https://api.weatherapi.com/v1/current.json";
const apiKey = "0886446c34e6415e81990847250202";

export const WeatherForecast = async (city) => {
    try {
        const response = await fetch(`${baseURL}?key=${apiKey}&q=${city}&aqi=yes`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Weather data:", data); // Console log the data
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

// // Example usage to check the response
// WeatherForecast("Delhi").then(data => {
//     console.log("Response data:", data);
// }).catch(error => {
//     console.error("Error fetching weather data:", error);
// });