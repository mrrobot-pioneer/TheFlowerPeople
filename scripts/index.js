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
