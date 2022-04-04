'use strict';

// samesite cookies

// Set a same-site cookie for first-party contexts
document.cookie = 'cookie1=value1; SameSite=Lax';
// Set a cross-site cookie for third-party contexts
document.cookie = 'cookie2=value2; SameSite=None; Secure';

// header 메뉴 drop
function drop(){
    const click = document.getElementById('menutab');
    if(click.style.display === 'block'){
       click.style.display = 'none';
    }else{
       click.style.display = 'block';
    }
 }