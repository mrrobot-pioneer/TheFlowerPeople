// JAVASCRIPT

/**SHOW/HIDE MENU IN MOBILE */
const menu = document.querySelector(".bx-menu-alt-right");
const nav = document.querySelector(".header__bottom nav ul");
const closeBtn = document.querySelector("#close");

menu.addEventListener("click", () => {
  nav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
});

// on scoll hide menu in mobile
window.addEventListener("scroll", () => {
  nav.classList.remove("active");
});

/**HIDE HEADER ON DOWN SROLL, REVEAL ON UP SCROLL */
const header = document.querySelector("header");
let lastScrollTop = 0;

const reduceHeader = () => {
  const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    header.classList.add("hide");
  } else {
    // Scrolling up
    header.classList.remove("hide");
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
};

window.addEventListener("scroll", reduceHeader);

/**REVEAL SCROLL TO TOP BUTTON */
const scrollToTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/**ADD ENTRANCE MOTION EFFECTS FROM PRIMEELEMENTS.PRO */
PrimeElements.fadeInUp(".collection", {
  distance: 50,
  delay: 200,
  duration: 1000,
});

PrimeElements.fadeInUp(".heading", {
  distance: 50,
  delay: 1000,
  duration: 1200,
});

PrimeElements.fadeInUp(".description", {
  distance: 50,
  delay: 900,
  duration: 1200,
});

PrimeElements.bounceDown(".call-to-action", {
  delay: 2000,
});
