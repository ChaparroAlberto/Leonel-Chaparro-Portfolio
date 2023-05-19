window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
})

const buttonMenu = document.querySelector(".button-menu"),
buttonIcon = document.querySelector(".btn15");
const navMenu = document.querySelector("header ul");

buttonMenu.addEventListener('click', ()=>{
  navMenu.classList.toggle("activo");
  buttonIcon.classList.toggle("activo");
})

// SLIDER HOME
// const slides = document.querySelectorAll(".slide");
// const sliderdots = document.querySelectorAll(".slider-dot");

// sliderdots.forEach((dot, i) => {
//   dot.addEventListener("click", () => {
//     let position = i;
//     let operation = position * -100;

//     slides.forEach((slide) => {
//       slide.style.transform = `translateX(${operation}%)`;
//     });

//     sliderdots.forEach((dot) => {
//       dot.classList.remove("active");
//     });
//     sliderdots[i].classList.add("active");
//   });
// });

const slides = document.querySelectorAll(".slide");
const sliderdots = document.querySelectorAll(".slider-dot");

let slideIndex = 0;
const intervalTime = 5000; // Intervalo de tiempo en milisegundos (ejemplo: 5000 = 5 segundos)
let slideInterval;

const nextSlide = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });

  sliderdots.forEach((dot) => {
    dot.classList.remove("active");
  });
  sliderdots[slideIndex].classList.add("active");

  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
};

const startSlide = () => {
  slideInterval = setInterval(nextSlide, intervalTime);
};

const stopSlide = () => {
  clearInterval(slideInterval);
};

sliderdots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    slideIndex = i;
    stopSlide();
    nextSlide();
    startSlide();
  });
});

startSlide();

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 500) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#40c2a6 ${scrollValue}%, #edeef0 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


document.addEventListener("DOMContentLoaded", function(event) {
  const slides = document.querySelector(".slides");
  const dotContainer = document.querySelector(".dots");
  let currentSlide = 0;
  let isPlaying = true;

  function goToSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;
    setActiveDot(currentSlide);
  }

  function nextSlide() {
    if (currentSlide === slides.children.length - 1) {
      slides.style.transition = "none";
      goToSlide(0);
      setTimeout(() => {
        slides.style.transition = "";
      }, 0);
    } else {
      goToSlide(currentSlide + 1);
    }
  }

  function setActiveDot(index) {
    const dots = Array.from(dotContainer.children);
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  dotContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("dot")) {
      const index = Array.from(dotContainer.children).indexOf(event.target);
      goToSlide(index);
    }
  });

  setInterval(() => {
    if (isPlaying) {
      nextSlide();
    }
  }, 4000);

  slides.addEventListener("mouseover", () => {
    isPlaying = false;
  });

  slides.addEventListener("mouseout", () => {
    isPlaying = true;
  });
});

