
function myFunction(){
    document.getElementById("main").controls=true;
}


const clip = document.querySelectorAll(".vid-s");
for (let i=0; i<clip.length; i++){
    clip[i].addEventListener("mouseenter",
    function(e){
        clip[i].play()
    })
    clip[i].addEventListener("mouseout",
    function(e){
        clip[i].pause()
    })
}

