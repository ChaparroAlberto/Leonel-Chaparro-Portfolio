window.addEventListener("scroll", function () {
  document
    .querySelector("header")
    .classList.toggle("sticky", window.scrollY > 0);
});
const buttonMenu = document.querySelector(".button-menu"),
  buttonIcon = document.querySelector(".btn15"),
  navMenu = document.querySelector("header ul");
buttonMenu.addEventListener("click", () => {
  navMenu.classList.toggle("activo"), buttonIcon.classList.toggle("activo");
});
const menuLinks = document.querySelectorAll("header ul li a");
menuLinks.forEach((e) => {
  e.addEventListener("click", () => {
    navMenu.classList.remove("activo"), buttonIcon.classList.remove("activo");
  });
});
const slides = document.querySelectorAll(".slide"),
  sliderdots = document.querySelectorAll(".slider-dot");
let slideIndex = 0;
const intervalTime = 5e3;
let slideInterval;
const nextSlide = () => {
    slides.forEach((e) => {
      e.style.transform = `translateX(-${100 * slideIndex}%)`;
    }),
      sliderdots.forEach((e) => {
        e.classList.remove("active");
      }),
      sliderdots[slideIndex].classList.add("active"),
      slideIndex++,
      slideIndex >= slides.length && (slideIndex = 0);
  },
  startSlide = () => {
    slideInterval = setInterval(nextSlide, 5e3);
  },
  stopSlide = () => {
    clearInterval(slideInterval);
  };
sliderdots.forEach((e, t) => {
  e.addEventListener("click", () => {
    (slideIndex = t), clearInterval(slideInterval), nextSlide(), startSlide();
  });
}),
  startSlide();
let calcScrollValue = () => {
  let e = document.getElementById("progress"),
    t =
      (document.getElementById("progress-value"),
      document.documentElement.scrollTop),
    n =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    l = Math.round((100 * t) / n);
  (e.style.display = t > 500 ? "grid" : "none"),
    e.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    }),
    (e.style.background = `conic-gradient(#40c2a6 ${l}%, #edeef0 ${l}%)`);
};
(window.onscroll = calcScrollValue),
  (window.onload = calcScrollValue),
  document.addEventListener("DOMContentLoaded", function (e) {
    const t = document.querySelector(".slides"),
      n = document.querySelector(".dots");
    let l = 0,
      o = !0;
    function s(e) {
      (t.style.transform = `translateX(-${100 * e}%)`),
        (l = e),
        (function (e) {
          Array.from(n.children).forEach((t, n) => {
            t.classList.toggle("active", n === e);
          });
        })(l);
    }
    n.addEventListener("click", function (e) {
      if (e.target.classList.contains("dot")) {
        s(Array.from(n.children).indexOf(e.target));
      }
    }),
      setInterval(() => {
        o &&
          (l === t.children.length - 1
            ? ((t.style.transition = "none"),
              s(0),
              setTimeout(() => {
                t.style.transition = "";
              }, 0))
            : s(l + 1));
      }, 4e3),
      t.addEventListener("mouseover", () => {
        o = !1;
      }),
      t.addEventListener("mouseout", () => {
        o = !0;
      });
  });
