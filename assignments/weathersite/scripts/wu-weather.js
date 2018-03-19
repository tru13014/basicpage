// JavaScript Documents

// Franklin, MN

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'https://api.wunderground.com/api/d22a413415370da9/conditions/q/MN/Franklin.json', true );

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
