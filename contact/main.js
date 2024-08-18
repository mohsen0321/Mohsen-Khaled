var typed = new Typed(".text-logo", {
  strings: ["Mohsen", "Khaled"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1500,
  loop: true,
});

var typed = new Typed(".user-profession1", {
  strings: [
    "Hello, I'm so glad you're here!",
    "Come on, feel free to talk to me!",
  ],
  typeSpeed: 75,
  backSpeed: 50,
  backDelay: 1500,
  loop: true,
});

function SendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_p0mh0ds", "template_eiq6lkf", parms)
    .then(alert("Message sent!!\n Thanks"));
}
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

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 2000);
});
