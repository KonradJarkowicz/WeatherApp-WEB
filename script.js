function getWeather() {

    const apiKey = 'a641832baf10e1338b937fb33dd2de04';
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter correct name of the city');
        return;
    }

    const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';
    const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}';
}