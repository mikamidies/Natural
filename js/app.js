// const cursor = document.getElementById('cursor')

// document.addEventListener('mousemove', function(e){
//     cursor.style.cssText = 'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
// });

var swiper = new Swiper(".homeSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});
