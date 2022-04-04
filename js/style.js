'use strict';

// samesite cookies

// Set a same-site cookie for first-party contexts
document.cookie = 'cookie1=value1; SameSite=Lax';
// Set a cross-site cookie for third-party contexts
document.cookie = 'cookie2=value2; SameSite=None; Secure';


// header - 헤더 dropdown
function show_list(){
   let dropbox = document.getElementById("menu_list");

   if(dropbox.style.display == "block"){
      dropbox.style.display = "none";
   } else {
      dropbox.style.display = "block";
   }
}
window.onclick = function(event){
   if(!event.target.matches(".hammenu")){
      document.getElementById("menu_list").style.display = "none"
   }
}