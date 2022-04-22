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


// main > slide - 슬라이드
let SlideIndex = 0;
showSlide();

function showSlide(){
   let i;
   let slides = document.getElementsByClassName('slider__item');
   let dotte = document.getElementsByClassName('dot');
   for(i=0; i < slides.length; i++){
      slides[i].style.display = 'none';
   }
   SlideIndex++;
   if(SlideIndex > slides.length){SlideIndex = 1}
   for(i = 0; i < dotte.length; i++){
      dotte[i].className = dotte[i].className.replace('active', '');
   }
   slides[SlideIndex-1].style.display='block';
   setTimeout(showSlide, 3000);
}

// 팝업 모달 창
function modalOpen(){
   document.querySelector('.kakao_pc_pop').style.display = 'block';
}

function modalClose(){
   document.querySelector('.kakao_pc_pop').style.display = 'none';
}

// click scroll script (top버튼)


// 애니메이션 슬라이드
let mainText = document.querySelector('.textSlide');
let imgSlide = document.querySelector('.emartImg');

// 포토센터 소개 슬라이드
window.addEventListener('scroll', function(){
   let value = window.scrollY;
   // 조건문
   if(value > 2000){
      mainText.style.animation = 'leftBlind 2s ease-out forwards';
      imgSlide.style.animation = 'rightBlind 2s ease-out forwards';
   }else{
      mainText.style.animation = 'leftS 2s ease-out';
      imgSlide.style.animation = 'rightS 2s ease-out';
   }
});

// 프론티어 장비소개 슬라이드
let frontierText = document.querySelector('.frontText');
let frontImg = document.querySelector('.frontImg');

window.addEventListener('scroll', function(){
   let front = window.scrollY;
   // 조건문
   if(front > 2600){
      frontierText.style.animation = 'rightBlind 2s ease-out forwards'
      frontImg.style.animation = 'leftBlind 2s ease-out forwards'
   }else{
      frontierText.style.animation = 'rightS 2s ease-out'
      frontImg.style.animation = 'leftS 2s ease-out'
   }
});

// 맨위 탑타이틀 슬라이드
let topTitle = document.querySelector('.title');

window.addEventListener('scroll', function(){
   let Hello = window.scrollY;
   console.log('scrollY'.Hello);
   // 조건문
   if(Hello > 36){
      topTitle.style.animation = 'HelloBlind 2s ease-out forwards'
   }else{
      topTitle.style.animation = 'HelloTitle 2s ease-out'
   }
});




