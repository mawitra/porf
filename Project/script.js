// Favicon
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Project | Portfolio Mawitra";
    $("#favicon").attr("href", "../assets/img/foto/p.jpeg");
  } else {
    document.title = "Welcome to My Portfolio";
    $("#favicon").attr("href", "../assets/img/foto/p.jpeg");
  }
});

// script hamburger untuk mobile responsive
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
