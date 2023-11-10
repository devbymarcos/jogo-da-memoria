export default function $(selector, all = false) {
  if (!all) return document.querySelector(selector);
  return document.querySelectorAll(selector);
}
