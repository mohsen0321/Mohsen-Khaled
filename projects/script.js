const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var typed = new Typed(".user-profession1", {
  strings: ["Html", "Css", "Js"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1500,
  loop: true,
});

var typed = new Typed(".user-profession2", {
  strings: ["Html", "Css", "Js", "Bootstrap"],
  typeSpeed: 100,
  backSpeed: 120,
  backDelay: 1500,
  loop: true,
});
var typed = new Typed(".user-profession3", {
  strings: ["Html", "Css", "Js"],
  typeSpeed: 100,
  backSpeed: 120,
  backDelay: 1500,
  loop: true,
});
var typed = new Typed(".user-profession4", {
  strings: ["Html", "Css"],
  typeSpeed: 100,
  backSpeed: 120,
  backDelay: 1500,
  loop: true,
});
var typed = new Typed(".user-profession5", {
  strings: ["Embeded", "Systems"],
  typeSpeed: 100,
  backSpeed: 120,
  backDelay: 1500,
  loop: true,
});
var typed = new Typed(".user-profession6", {
  strings: ["Java", "JavaFx"],
  typeSpeed: 100,
  backSpeed: 120,
  backDelay: 1500,
  loop: true,
});

var typed = new Typed(".user-profession7", {
  strings: ["React", "Project"],
  typeSpeed: 100,
  backSpeed: 120,
  backDelay: 1500,
  loop: true,
});

function toggleIcon() {
  var button = document.getElementById("toggleButton");
  if (button.classList.contains("fa-bars")) {
    button.classList.remove("fa-bars");
    button.classList.add("fa-xmark");
  } else {
    button.classList.remove("fa-xmark");
    button.classList.add("fa-bars");
  }
}
var typed = new Typed(".text-logo", {
  strings: ["Mohsen", "Khaled"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1500,
  loop: true,
});

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 2000);
});
