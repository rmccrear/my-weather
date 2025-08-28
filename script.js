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

// Use console log to check that we have a good understanding of the data object.
console.log(newOrleansWeather);
console.log("NO Lat: " + newOrleansWeather.latitude);
console.log("NO Lon: " + newOrleansWeather.longitude);
console.log("NO temp: " + newOrleansWeather.current.temperature_2m);

var newOrleansTemp = newOrleansWeather.current.temperature_2m;

console.log(newOrleansTemp);


// put the data on the page.
setText("temp", newOrleansTemp);

