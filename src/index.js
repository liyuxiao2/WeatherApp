import  parseWeather  from './weather.js';

let search = document.getElementById('search');

const weatherIcons = {
    "clear-day": "☀️",
    "clear-night": "🌙",
    "partly-cloudy-day": "⛅",
    "partly-cloudy-night": "🌙☁️",
    "cloudy": "☁️",
    "fog": "🌫️",
    "wind": "💨",
    "rain": "🌧️",
    "showers-day": "🌦️",
    "showers-night": "🌧️",
    "snow": "❄️",
    "thunderstorm": "⛈️",
    "hail": "🌨️"
};


function getIcon(icon){
    return weatherIcons[icon];
}

search.addEventListener('click', async (e) => {
    e.preventDefault();

    let location = document.getElementById('location').value;

    let data = await parseWeather(location);

    buildFeedback(data);
});

function buildFeedback(data){
    let dataList = [];

    let city = document.getElementById('city');
    let date = document.getElementById('date');
    let temperature = document.getElementById('temperature');
    let description = document.getElementById('description');
    let icon = document.getElementById('icon');

    dataList.push(city, date, temperature, description, icon);

    dataList.forEach((item) => {
        if(item.id === 'icon'){
            item.textContent = getIcon(data[item.id]);
            return;
        }
        item.textContent = data[item.id];
    });
}




