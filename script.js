const apiKey = "ea6805d4f23671a64580bc4d52fd2abd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data  = await response.json(); // Has the information about the weather

    console.log(data)
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "C";



} ;
searchBtn.addEventListener("click",()=> {
    checkWeather(searchBox.value);
})