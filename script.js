let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector(".header .flex .navbar");

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle("active");
}

var swiper = new Swiper(".swiper", {
  centeredSlides:true,
  speed: 400,
  loop : true,
  slidesPerView:"auto",
  freeMode: false,
  mousewheel: {
      thresholdDelta: 70,
  },
  Keyboard: {
      enabled: true,
      onlyInViewport: true,
  },
  breakpoints: {
      0: {
        slidesPerView:1,
      
      },
      900: {
        slidesPerView:2,
     
      },
      1100: {
        slidesPerView:3,
         
      },
    },
}); 


var swiper = new Swiper(".teacher-slider", {
  spaceBetween:20,
  grapCursor:true,
  loop : true,
  pagination: {
    el: "swiper-pagination",
      clickable: true,
  },
  
  breakpoints: {
      0: {
        slidesPerView:1,
      
      },
      900: {
        slidesPerView:2,
     
      },
      1100: {
        slidesPerView:3,
         
      },
    },
}); 





 


 

