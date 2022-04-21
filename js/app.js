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
