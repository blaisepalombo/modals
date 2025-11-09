const modal = document.querySelector("#modal");
const openBtn = document.querySelector("#open-modal");
const closeBtn = document.querySelector(".close-button");

function openModal() {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", false);
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", true);
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
