// Show And Hide Password
const passDiv = document.querySelector(".pass");
const passInput = document.querySelector(".pass input");
const passInputRe = document.querySelector(".pass-re input");
const showPassIcon = document.querySelector("#show-pass");
const hidePassIcon = document.querySelector("#hide-pass");
const showPassIconRe = document.querySelector("#show-pass-re");
const hidePassIconRe = document.querySelector("#hide-pass-re");

showPassIcon.addEventListener("click", (e) => {
  showPassIcon.classList.add("d-none");
  hidePassIcon.classList.remove("d-none");
  passInput.type = "text";
});
hidePassIcon.addEventListener("click", (e) => {
  showPassIcon.classList.remove("d-none");
  hidePassIcon.classList.add("d-none");
  passInput.type = "password";
});
showPassIconRe.addEventListener("click", (e) => {
  showPassIconRe.classList.add("d-none");
  hidePassIconRe.classList.remove("d-none");
  passInputRe.type = "text";
});
hidePassIconRe.addEventListener("click", (e) => {
  showPassIconRe.classList.remove("d-none");
  hidePassIconRe.classList.add("d-none");
  passInputRe.type = "password";
});

// Open Sign Up Page
const openRegester = document.querySelector(".regester-p span");
const openLogin = document.querySelector(".log-p span");
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

openRegester.addEventListener("click", () => {
  loginForm.classList.add("d-none");
  signupForm.classList.remove("d-none");
});
// Open Login
openLogin.addEventListener("click", () => {
  loginForm.classList.remove("d-none");
  signupForm.classList.add("d-none");
});
