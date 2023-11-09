function logout(element) {
    console.log(element.innerHTML)
    if (element.innerHTML == "Login") {
        element.innerHTML="Logout"
    }
    else{
        element.innerHTML="Login"
    }

} 
function login(element) {
    console.log(element.innerHTML)
    if (element.innerHTML == "Logout"){
        element.innerHTML= "Login"
    }
    else {
        element.innerHTML="Logout"
    }
}

function hide(element){
    element.remove();
}

function myFunction(){
    alert("Ninja was liked")
}
var h1 = document.querySelector("h1");
var title = document.querySelector("#title");