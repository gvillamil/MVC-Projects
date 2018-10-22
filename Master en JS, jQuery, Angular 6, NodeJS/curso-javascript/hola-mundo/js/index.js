/*
The example code for using weather api.
Created by Yusei Ito 2018. Creative Commons license.

In this example, we will make a weather widget which shows current weather in Muang Xai, Laos.

Codes will processed on order each comment shows.
Ex) 
Process will progress like 
0.Call a function.-> 
1.Creat Http Request object to access the URL-> 
2.Create URL ->
	2a. set YOUR API KEY->
2b. Basic URL
*/


function getWeather() {
    var data = new XMLHttpRequest(); //1.Creat Http Request object to access the URL

    data.onreadystatechange = function() {
//5. On 'readystate' changed, that situation means that works on progress.
        if ((data.readyState == 4) && (data.status == 200)) {

//6.Check the status. readyState=4 means you have already got data. ststus=200 means your application received http status code 200. It means your request is processed completely. If each status means 'succeed',Go to next process below.

            var json = JSON.parse(data.responseText); //7.Perse data as a json object

            let city = json.name;//8.Get city name from son object

            var txt = "Weather at " + city + ", Fetch:" + Date() + "<br>";//9.Write a response header.

//10.Get each values from JSON. 
            let temp = json.main.temp_min;
            let weather = json.weather[0].main;
            let weather_desc = json.weather[0].description;
            let amount_clouds = json.clouds.all;
            let wind_speed = json.wind.speed;
            let wind_deg = json.wind.deg;

//11.Make a text message that will be visible.
            txt = txt + "Temp:" + temp + " <br> Weather:" + weather + "  <br> description:" + weather_desc + "\n " + "<br>clouds:" + amount_clouds + "% <br>wind:" + wind_speed + "  <br>deg:" + wind_deg + "<br>";


            document.getElementById("Weather_Widget").innerHTML=txt;// 12(Finally).Display the text.
        }
    };

    var URL_JSON = CreateRequestURL();//2.Create URL
    data.open("GET", URL_JSON, true);//3.Run HTTP "GET" method to GET the response.
    data.send(null);//4.You don't need to send any http parameter. You send 'null'.
}

function CreateRequestURL() {
//This function makes your query URL.

    let API_KEY = "6cabad30e65012d9051f0edbc6905f0c" //2a. set YOUR API KEY
    let BASE_URL = "http://api.openweathermap.org/data/2.5/weather" //2b. Basic URL
    let city = "3515811" //2c. city id  you want to request. (This is the id of Mango Tai,Laos)

    return (BASE_URL + "?id=" + city + "&APPID=" + API_KEY);//2d.Make URL by connecting base URL and query.
}

getWeather();//0.Call a function.