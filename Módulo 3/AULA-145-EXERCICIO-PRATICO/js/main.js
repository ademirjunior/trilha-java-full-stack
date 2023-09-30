//Aplique as seguintes informações em títulos ou parágrafos com INNER HTML;
//Tamanho de telas;
document.getElementById("p1").innerHTML = 
    "WIDTH: " + screen.width + "px<br>" 
    + "HEIGHT: " + screen.height + "px<br>";

//Profundidade de cores;
document.getElementById("p2").innerHTML = "Profundidade de cor: " + screen.colorDepth;

//Caminho e porta da página;
document.getElementById("p3").innerHTML = "Caminho: " + window.location.pathname + "px<br>" 
+ "Porta: " + window.location.port;

//Geolocalização. 
const x = document.getElementById("p4");

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Sem suporte para geolocalização!"
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.latitude;
}