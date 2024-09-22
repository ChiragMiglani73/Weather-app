const apiKey="326fb14916fabcf91c4b75ecefb1ff63";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city){
    const response= await fetch(apiUrl+ city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }else{

    
    var data= await response.json();


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
   
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds-icon.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear-icon.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain wb.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle-icon.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist-icon.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="images/snow-icon.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";


}
}
searchBox.addEventListener("keypress",function(e) {
    if (e.keyCode===13){
        e.preventDefault();
        checkWeather(searchBox.value);
    }
});
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
