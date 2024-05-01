const hambuger = document.querySelector(".hambuger");
const navLinks = document.querySelector(".nav_links");

hambuger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hambuger.classList.toggle("active");
});
