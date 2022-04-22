// const cursor = document.getElementById('cursor')

// document.addEventListener('mousemove', function(e){
//     cursor.style.cssText = 'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
// });

var swiper = new Swiper(".homeSwiper", {
  navigation: {
    nextEl: ".home-next",
    prevEl: ".home-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  autoplay: {
    delay: 5000,
  },
  speed: 2000,
});

var swiper = new Swiper(".projektSwiper", {
  navigation: {
    nextEl: ".projekt-next",
    prevEl: ".projekt-prev",
  },
  slidesPerView: 1.4,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 700,
});

var swiper = new Swiper(".partnersSwiper", {
  navigation: {
    nextEl: ".partners-next",
    prevEl: ".partners-prev",
  },
  slidesPerView: 4,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 1,
  },
  speed: 3000,
});

var element = document.getElementById("num");
var maskOptions = {
  mask: "+{998}(00)000-00-00",
};
var mask = IMask(element, maskOptions);
