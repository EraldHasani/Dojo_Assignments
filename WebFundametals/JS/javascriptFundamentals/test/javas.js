
function turnOff(element){
    element.innerText = "Off";
}

function addShadow(element) {
    element.classList.add("shadow")
 }
    
function removeShadow(element) {
    element.classList.remove("shadow")
 }
     

 
 function over(element) {
    element.style.backgroundColor = "lime";    
}
    
function out(element) {
    element.style.backgroundColor = "";   
}

var h1 = document.querySelector("h1");
var title = document.querySelector("#title");

var h3 = document.querySelector("h3");
h3.innerText = "New Title";


var petImg = document.querySelector("#pet-img");
    
function switchImg() {
    petImg.src = "dog.jpg";  

}
function setActive(element) {
    element.style.backgroundColor = "#222222";
    element.style.color = "#ffffff";
}


function message() {
    console.log("Delayed message");    
}
    
console.log("Start");
setTimeout(message, 3000);
console.log("End");

function chooseLunch(element) {
    alert("You picked " + element.value);
}

var nameTag = document.querySelector("#name-tag");
function setName(element) {
    console.log(element.value);
    nameSpan.innerText = element.value;
}


var colors = document.querySelectorAll(".color");
    
function applyColors(){
    for(var i=0; i<colors.length; i++) {
        colors[i].style.color = colors[i].innerText;
    }
}


function scale(element, value) {
    element.style.transform = "scale(" + value + ")";
}
