const apiKey = "9ac65abe81baf6e73e1190792be7c872";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchField = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if ( response.status == 404){
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather').style.display= "none"
    } else{
        let data = await response.json();

    document.querySelector('.city').innerHTML = data.name +", " + data.sys.country;
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Humidity"){
        weatherIcon.src = "images/humidity.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }

    document.querySelector('.weather').style.display= "block"
    document.querySelector('.error').style.display = "none"
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchField.value);
})

searchField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchBtn.click();
    }
});