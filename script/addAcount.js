let tel = document.querySelector(".tel");
let email = document.querySelector(".email"),
  inoutTel = document.querySelector("#telephone");

tel.addEventListener("click", () => {
  tel.classList.add("active");
  email.classList.remove("active");
  inoutTel.type = "tel";
});
