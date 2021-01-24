const weather = document.querySelector(".js-weather");


const API_KEY = "2cdfed833b043326486cadf3ba5431d8";
const COORDS = "coords";

function getWeahter(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return (response.json());
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}℃ @ ${place}`;
    })
}

function saveCoords(coordsOBJ){
    localStorage.setItem(COORDS, JSON.stringify(coordsOBJ));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsOBJ = {
        latitude,
        longitude
    };
    saveCoords(coordsOBJ);
    getWeahter(latitude, longitude);
}
function handleGeoError(){
    console.log("Cant acess geo location")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeahter(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();