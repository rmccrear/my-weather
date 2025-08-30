// I want to have the data here to put in the HTML Elements

// Check that our script is loading.
console.log("Hello from script.js");

// Check that the helpers.js file loaded.
setProperty("main-title", "color", "red");

var newOrleansWeather = {
    "latitude": 29.95653,
    "longitude": -90.07374,
    "generationtime_ms": 0.027179718017578125,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 21.0,
    "current_units": {
        "time": "iso8601",
        "interval": "seconds",
        "temperature_2m": "°F",
        "is_day": ""
    },
    "current": {
        "time": "2025-08-28T00:00",
        "interval": 900,
        "temperature_2m": 85.4,
        "is_day": 1
    }
};

// This function will update the page with the data.
function updateWeatherCard() {
    console.log("hello from update weather card function");
    setText("temp", newOrleansWeather.current.temperature_2m);
}
// updateWeatherCard();

function fetchNewOrleansWeather() {
    console.log("hello from fetchNewOrleansWeather");
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch("https://api.open-meteo.com/v1/forecast?latitude=29.95653&longitude=-90.07374&current=temperature_2m,is_day&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch", requestOptions)
        // .then((response) => response.text())
        // .then((result) => console.log(result))
        .then((response) => response.json())
        .then(function (result) {
            console.log(result);
            setText("temp", result.current.temperature_2m);
        })
        .catch((error) => console.error(error));

}

// This will kick of the network call.
fetchNewOrleansWeather();
