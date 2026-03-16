// const hamburger = document.querySelector(".hamburger");
// const headers = document.querySelectorAll(".header");

// hamburger.addEventListener("click", () => {
//   headers.forEach((h) => h.classList.toggle("show"));
// });

const hamburger = document.querySelector(".hamburger");
const headerWrapper = document.querySelector(".headerwrapper");

hamburger.addEventListener("click", () => {
  headerWrapper.classList.toggle("active");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//
