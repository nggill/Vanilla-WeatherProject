//Formatted date code
function formatDate(timestamp){
//calculate the date
let date=new Date(timestamp);
let hours=date.getHours();
if (hours<10){hours=`0${hours}`;}
let minutes=date.getMinutes();
if(minutes<10){minutes=`0${minutes}`;}
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day=days[date.getDay()];

return`${day} ${hours}:${minutes}`;

}
//Displaying Forcasting cards for next few days
function displayForecast(){
    let forecastElement=document.querySelector("#forecast");

    forecastElement.innerHTML="Forecast";
}
function getForecast(coordinates){
    let apiKey
    let apiURL=`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`
}
//Calling temperature from API
function displayTemperature(response){
let temperatureElement=document.querySelector("#temperature");
let cityElement=document.querySelector("#city");
let descriptionElement=document.querySelector("#description");
let humidityElement=document.querySelector("#humidity");
let windElement=document.querySelector("#wind");
let dateElement=document.querySelector("#date");
let iconElement=document.querySelector("#icon");

celsiusTemperature= response.data.main.temp;



temperatureElement.innerHTML=Math.round(response.data.main.temp);
cityElement.innerHTML=response.data.name;
descriptionElement.innerHTML=response.data.weather[0].description;
humidityElement.innerHTML=response.data.main.humidity;
windElement.innerHTML=Math.round(response.data.wind.speed);
dateElement.innerHTML=formatDate(response.data.dt *1000);
iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt",response.data.weather[0].description);
}
//Search bar function
function search(city){

    let apiKey="23ae8af4580cf1669a4ba3e951eb0962";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(displayTemperature);
}
function handleSubmit(event){event.preventDefault();
let cityInputElement=document.querySelector("#city-input");
search(cityInputElement.value);
}
//Unit conversion
function displayFahrenheitTemperature(event){
    event.preventDefault();
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let fahrenheitTemperature=(celsiusTemperature*9)/5+32;
    let temperatureElement=document.querySelector("#temperature");
    temperatureElement.innerHTML=Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event){
    event.preventDefault();
    fahrenheitLink.classList.remove("active");
    celsiusLink.classList.add("active");
    let temperatureElement=document.querySelector("#temperature");
    temperatureElement.innerHTML= Math.round(celsiusTemperature);
}


getForecast(response.data.coord)

let celsiusTemperature=null;

let form= document.querySelector("#search-form");
form.addEventListener("submit",handleSubmit);

let fahrenheitLink=document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink=document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("New York");
displayForecast();