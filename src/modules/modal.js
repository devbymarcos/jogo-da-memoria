import $ from "./selector";

export default function modal() {
  const btn = $(".close-modal");
  const modal = $("#instruction");

  btn.addEventListener("click", () => {
    modal.classList.add("remove");
  });
}
