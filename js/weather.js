function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("You live in", lat, long);
}

function onGeoError() {
    alert("Can't connect to GeoService")
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//https://api.openweathermap.org/data/2.5/weather?lat={35.1496}&lon={126.9156}&appid={f8cf37e9238f5703f66582e1fa8e1fca}