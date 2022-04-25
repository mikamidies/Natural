// const cursor = document.getElementById('cursor')

// document.addEventListener('mousemove', function(e){
//     cursor.style.cssText = 'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
// });
let toggle = document.getElementById("toggle");
let collapse = document.getElementById("collapse");

if (toggle) {
  toggle.addEventListener("click", () => {
    collapse.classList.toggle("show-menu");
    toggle.classList.toggle("close-btn");
  });
}

var homeSwiper = new Swiper(".homeSwiper", {
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

// homeSwiper.on("slideChange", function () {
//   let slideTitle = document.getElementById("homeTitlte");
//   let slideTxt = document.getElementById("homeSub");
//   let slideImg = document.querySelectorAll(".slide__img");

//   slideImg.forEach((slideImg) => {
//     let dataTitle = slideImg.dataset.title;
//     let dataSub = slideImg.dataset.sub;

//     slideTitle.innerText = dataTitle;
//     slideTxt.innerText = dataSub;
//   });
// });

new Swiper(".projektSwiper", {
  navigation: {
    nextEl: ".projekt-next",
    prevEl: ".projekt-prev",
  },
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 700,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 1.4,
    },
  },
});

new Swiper(".partnersSwiper", {
  navigation: {
    nextEl: ".partners-next",
    prevEl: ".partners-prev",
  },
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 1,
  },
  speed: 3000,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

new Swiper(".projektSwiper2", {
  navigation: {
    nextEl: ".projekt-next2",
    prevEl: ".projekt-prev2",
  },
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 800,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 1.4,
    },
  },
});
new Swiper(".projektSwiper3", {
  navigation: {
    nextEl: ".projekt-next3",
    prevEl: ".projekt-prev3",
  },
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 900,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 1.4,
    },
  },
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
