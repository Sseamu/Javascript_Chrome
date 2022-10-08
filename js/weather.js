//navigator -> get geolocation impormation
// getCurrentPosition(위치 정보 획득에 성공했을 시 실행될 함수, 실패했을 시 실행될 함수)
// getCurrentPosition 로 유저의 위치 정보-위도와 경도-를 얻고, 이를 성공시 실행될 함수에 콜백한다.
// 위도와 경도 정보를 API를 사용하여 장소와 날씨 정보로 변환함 -> Call API By geographic coordinates

const API_KEY = 'f8cf37e9238f5703f66582e1fa8e1fca';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("You live in", lat, long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText =`${data.weather[0].main} / ${data.main.temp}˚C`});
}

function onGeoError() {
    alert("Can't connect to GeoService")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);