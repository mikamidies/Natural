// const cursor = document.getElementById('cursor')

// document.addEventListener('mousemove', function(e){
//     cursor.style.cssText = 'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
// });

var swiper = new Swiper(".homeSwiper", {
  loop: true,
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

// gsap.registerPlugin(ScrollTrigger);

// let conWrap = document.getElementById("conWrap");

// ScrollTrigger.matchMedia({
//   "(min-width: 800px)": function () {
//     gsap.to(".nav", {
//       scrollTrigger: {
//         trigger: ".nav__wrap",
//         start: "top top",
//         endTrigger: "#con" + 500,
//         duration: 1,
//         delay: 0.1,
//         // end: "bottom 50%-=100px",
//         scrub: 1,
//         toggleActions: "restart none reverse pause",
//       },
//       y: conWrap?.clientHeight - 200,
//     });
//   },
// });
