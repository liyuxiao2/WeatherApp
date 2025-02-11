WEATHER_API_KEY = 'CEV4R37JX8ZLJHYNFZK2UC9VK'


async function getWeather(city){
    try{
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${WEATHER_API_KEY}`
        );


        const data = await response.json();


        console.log(data);
    } catch(error){
        console.log(error);
    }
}

getWeather('London');
