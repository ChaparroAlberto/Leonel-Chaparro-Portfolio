// Sticky header al hacer scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("sticky", window.scrollY > 0);
});

// Toggle menu
const buttonMenu = document.querySelector(".button-menu");
const buttonIcon = document.querySelector(".btn15");
const navMenu = document.querySelector("header ul");

buttonMenu.addEventListener("click", () => {
  navMenu.classList.toggle("activo");
  buttonIcon.classList.toggle("activo");
});

// Cerrar menu al hacer click en un link
const menuLinks = document.querySelectorAll("header ul li a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("activo");
    buttonIcon.classList.remove("activo");
  });
});

// Slider
const swiper1 = new Swiper("#swiper1", {
  loop: true,
  autoplay: {
    delay: 7000,
  },
  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper2 = new Swiper("#swiper2", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Scroll progressbar
const progressBar = document.getElementById("progress");
const calcScrollValue = () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = Math.round((scrollTop / scrollHeight) * 100);

  if (scrollTop > 500) {
    progressBar.style.display = "grid";
    progressBar.style.background = `conic-gradient(#40c2a6 ${scrollPercent}%, #edeef0 ${scrollPercent}%)`;
  } else {
    progressBar.style.display = "none";
  }
};

progressBar.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", calcScrollValue);
window.addEventListener("load", calcScrollValue);
