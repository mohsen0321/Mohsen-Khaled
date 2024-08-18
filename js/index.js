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

let span = document.querySelector(".up");

window.onscroll = function () {
  if (this.scrollY >= 300) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     } else {
//       entry.target.classList.remove("show");
//     }
//   });
// });

// const hiddenelements = document.querySelectorAll(".hidden");
// hiddenelements.forEach((el) => observer.observe(el));

var typed = new Typed(".text-logo", {
  strings: ["Mohsen", "Khaled"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1500,
  loop: true,
});
var typed = new Typed(".textcollege", {
  strings: [
    " Bachelor in Electrical Engineering",
    " Computer and Systems Engineering\n(CSE) ",
  ],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 3000,
  loop: true,
});
var typed = new Typed(".texttime", {
  strings: [" 2021-2023", " 2023-2025 "],
  typeSpeed: 120,
  backSpeed: 50,
  backDelay: 5500,
  loop: true,
});

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 2000);
});

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     } else {
//       entry.target.classList.remove("show");
//     }
//   });
// });

// const hiddenElements = document.querySelector(".hidden");
// hiddenElements.forEach((el) => observer.observe(el));
