// JavaScript Documents

// Franklin, MN

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'https://api.wunderground.com/api/d22a413415370da9/conditions/q/OR/Springfield.json', true );

weatherObject.send();

weatherObject.onload = function() {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('feels').innerHTML = weatherInfo.current_observation.feelslike_f;
    
    document.getElementById('windchill').innerHTML = weatherInfo.current_observation.windchill_f;
    
    document.getElementById('wLogo').src = weatherInfo.current_observation.image.url;
    

} // end of onload

// 10 DAY Forecast Table

var forecastObj = new XMLHttpRequest();

forecastObj.open('GET', 'https://api.wunderground.com/api/d22a413415370da9/forecast10day/q/OR/Springfield.json', true);

forecastObj.send();

forecastObj.onload = function () {

    var weatherTen = JSON.parse(forecastObj.responseText).forecast.simpleforecast.forecastday;
    console.log(weatherTen);

    var tbody = document.querySelector("tbody");
    var tr = document.createElement("tr");

    for (var i = 0; i < weatherTen.length; i++) {
        console.log(weatherTen[i]);
        var td = document.createElement("td");
        td.textContent = weatherTen[i].high.fahrenheit + '\u00B0' + 'F';
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}
