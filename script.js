AOS.init({
  duration: 1000,
  once: true,
});

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const menuLinks = document.querySelectorAll(".mobile-menu a");


hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});


menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});


const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("accordion-active");
  });
});
