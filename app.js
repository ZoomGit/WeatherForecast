
searchButton.addEventListener('click',searchWeather);

function searchWeather(){
    loadingText.style.display='block';
    weatherBox.style.display='none';
    var cityName=searchCity.value;
    if(cityName.trim().length==0)
    {
        alert('PLZ enter city name ');
    }
    var http=new XMLHttpRequest();
    var apiKey='d182f144c16c28908c12f2ed08a8f837';
    var url='http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&appid='+apiKey;
    var method='GET';
    http.open(method,url);
    http.onreadystatechange=function(){
        if(http.readyState === XMLHttpRequest.DONE && http.status == 200)
        {
            var data = JSON.parse(http.responseText);
            var weatherData=new Weather(cityName,data.weather[0].description);
            weatherData.temprature=data.main.temp;
            updateWeather(weatherData);
        }
        else if(http.readyState === XMLHttpRequest.DONE && http.status !== 200)
        {
            console.log('something goes wrong');
        }
    };
    http.send();


}

function updateWeather(weatherData){
    weatherCity.textContent= weatherData.cityName;
    weatherDescription.textContent=weatherData.description;
    weatherTemprature.textContent=weatherData.temprature;
    loadingText.style.display='none';
    weatherBox.style.display='block';
}