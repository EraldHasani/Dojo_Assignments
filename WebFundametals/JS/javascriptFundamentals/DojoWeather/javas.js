function myalert() {
    alert("Loading weather report...")
}

function removeMessage(){
 var footerElements= document.querySelectorAll("footer");
 footerElements.forEach(function(footerElement){
    footerElement.remove();
 });
}




function fahr (temperature) {
     return Math. round(9 / 5 * temperature + 32);
}
function celc(temperature) {
     return Math. round(5 / 9 * (temperature - 32));
}
 function changeTemp(element) {
    var temperatures = document. querySelectorAll(".temperature");
    if (element.value == "°C") {
    for(let i=0; i<temperatures.length; i++){
    var temperatureVal = parseInt(temperatures[i].innerText);
    temperatures[i].innerText = celc(temperatureVal);
    }
    } else {
        for(let i=0; i<temperatures. length; i++){
            var temperatureVal = parseInt(temperatures[i].innerText);
            temperatures[i].innerText = fahr(temperatureVal) + "°";
        }
    }
}


