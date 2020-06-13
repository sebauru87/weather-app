/**
 * Weather App
 */


const weatherApi= config.MY_KEY_API;


/**
 * Retrieve weather data from openweathermap
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";

  let userPromise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}&units=metric`);
  //console.log(userPromise);
  userPromise.then((response) => {

      return response.json();
    }).then((weatherData) => {

      document.getElementById("city-name").innerText = weatherData.name;
      document.getElementById("temp").innerText = weatherData.main.temp;
      document.getElementById("weather-type").innerText = weatherData.weather[0].description;
      document.getElementById("min-temp").innerText = weatherData.main.temp_min;
      document.getElementById("max-temp").innerText = weatherData.main.temp_max;
      document.getElementById("pressure").innerText = weatherData.main.pressure;
      document.getElementById("humidity").innerText = weatherData.main.humidity;


    })
    .catch((error) => {
      console.log(error);
    })
}

/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;

  getWeatherData(city);
}

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {


}