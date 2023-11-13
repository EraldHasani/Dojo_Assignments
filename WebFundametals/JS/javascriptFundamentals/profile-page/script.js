function removeProfile(idja) {
    document.getElementById(idja).remove();
   }

//    var oIcon = document.getElementById("button");
//    var oBadge = document.getElementsByClassName("badge");
//    var count = 2;
//    oIcon.addEventListener('click', decrease())  { 
//        oBadge.innerHTML = count -= 1;
//    }

  
   const button = document.getElementById("btnn");
   button.addEventListener ("click", updateName() );
   let nameProfile = document.getElementById('profileName')

   function updateName() {
    let name = prompt("Enter a new name");
    if (name !== null) {
    profileName.innerText = ` ${name}`;
  }
   }

 
