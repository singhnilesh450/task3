let ch = document.querySelector(".searchh");
let chh = document.querySelector(".ser");
let chhh = document.querySelector(".vb");
ch.addEventListener("click", () => {
  console.log("clicked");
  chh.style.display = "unset";
  chh.classList.add("rans");
});
chh.addEventListener("click", () => {
  console.log("close");
  chh.style.display = "none";
  chh.classList.remove("rans");
});
