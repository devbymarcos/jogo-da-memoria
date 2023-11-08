export default function modal() {
  const btn = document.querySelector(".close-modal");
  const modal = document.getElementById("instruction");

  btn.addEventListener("click", () => {
    modal.classList.add("remove");
  });
}
