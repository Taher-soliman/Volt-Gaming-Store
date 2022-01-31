// Side bar Navigation
const sideBarBtn = document.querySelector(".toggle-nav-btn");
const sideBar = document.querySelector("#sidebar");
const pageContent = document.querySelector(".page-content");
const logoImg = document.querySelector(".logo");
const windowWidth = window.innerWidth;
sideBarBtn.addEventListener("click", () => {
  sideBar.classList.toggle("toggle-activate");
  pageContent.classList.toggle("activated-aside");
  if (sideBar.classList.contains("toggle-activate")) {
    logoImg.classList.add("d-none");
  } else if (window.innerWidth > 991) {
    logoImg.classList.add("d-none");
  } else {
    logoImg.classList.remove("d-none");
  }
});
//Try Media

// setInterval(() => {
//   console.log(window.innerWidth);
//   console.log(window.innerWidth > 991);
// }, 2000);
// Trigger Sticky Nav Bar
window.addEventListener("scroll", function () {
  let nav = document.querySelector("#nav-bar");
  nav.classList.toggle("sticky-nav", window.scrollY > 0);
});
// Check opend from mobile
function checkMopile() {
  if (window.innerWidth < 991) {
    sideBar.classList.add("toggle-activate");
    pageContent.classList.add("activated-aside");
  }
}
checkMopile();
// Trigger Owl Carusel For Banner
/*$(".owl-carousel.owl-banner").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});*/
