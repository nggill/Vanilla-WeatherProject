function displayTemperature(response){
let temperatureElement=document.querySelector("#temperature");
let cityElement=document.querySelector("#city");
let descriptionElement=document.querySelector("#description");
temperatureElement.innerHTML=Math.round(response.data.main.temp);
cityElement.innerHTML=response.data.name;
descriptionElement.innerHTML=response.data.weather[0].description;}
let apiKey="23ae8af4580cf1669a4ba3e951eb0962";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);