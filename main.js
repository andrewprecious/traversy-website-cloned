const hambuger = document.querySelector(".hambuger");
const navLinks = document.querySelector(".nav_links");
const modalBackground = document.querySelector(".modal-background");
const closeBtn = document.querySelector(".closeBtn");

hambuger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hambuger.classList.toggle("active");
});

window.onload = function () {
  modalBackground.style.display = "block";
};

modalBackground.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-background")) {
    modalBackground.style.display = "none";
  }
});

closeBtn.addEventListener("click", () => {
  modalBackground.style.display = "none";
});
