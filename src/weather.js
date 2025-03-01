let WEATHER_API_KEY = 'CEV4R37JX8ZLJHYNFZK2UC9VK'


async function getWeather(city){
    try{
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?key=${WEATHER_API_KEY}`
        );


        const data = await response.json();

        return data;
    } catch(error){
        console.log(error);
    }
}

export default async function parseWeather(city){
    try{
        const weather = await getWeather(city);

        const weatherData = {
            date: weather.currentConditions.datetime,
            city: weather.resolvedAddress,
            temperature: weather.currentConditions.temp,
            feelsLike: weather.currentConditions.feelslike,
            description: weather.currentConditions.conditions,
            icon: weather.currentConditions.icon,
        };

        console.log(weatherData);

        return weatherData;
    } catch(error){
        console.log(error);
    }
}