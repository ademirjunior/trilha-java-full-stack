function maiorIdade(){
    const i = document.getElementById("id1");
    if(!i.checkValidity()){
        document.getElementById("demo").innerHTML = i.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "Maior idade!"
    }
}




const x = document.getElementById("local");

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

function myHistoryBack(){
    window.history.go(-1);
 }

function myHistoryGo(){
    window.history.go(1);
 }