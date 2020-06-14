/**
 * Weather App
 */


const weatherApi = config.MY_KEY_API;


/**
 * Retrieve weather data from openweathermap
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";

  const FULL_URL = `${URL}?q=${city}&appid=${weatherApi}&units=metric`;
  const weatherPromise = fetch(FULL_URL);

  return weatherPromise.then((response) => {
    //console.log(response);
    return response.json();
  })
}

/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;

  getWeatherData(city)
    .then((res) => {
      //console.log(res.name);
      showWeatherData(res);
    }).catch((error) => {
      console.log(error);
      console.log("Something happend");
    })
}

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {

  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("weather-type").innerText = weatherData.weather[0].description;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
  document.getElementById("pressure").innerText = weatherData.main.pressure;
  document.getElementById("humidity").innerText = weatherData.main.humidity;

}