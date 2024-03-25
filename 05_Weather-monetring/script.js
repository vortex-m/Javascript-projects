const apiKey = '68e0d279096ebbccf4003af64aa93c68';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=banglore';


const searchBox = document.querySelector(".button input");
const searchBtn = document.querySelector(".button output");

async function checkWeather(city) {
     const responce = await fetch(apiURL + city + `&appid=${apiKey}`);
     var data = await responce.json();

     console.log(data);

     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

}

searchBtn.addEventListener("click", () => {
     checkWeather(searchBox.value);
})