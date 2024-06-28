const ConfirmPassword1 = document.querySelector("#ConfirmPassword");
const Surname1 = document.querySelector("#Surname");
const Name1 = document.querySelector("#Name");
const MobileNumber1 = document.querySelector("#MobileNumber");
const EmailAddres1 = document.querySelector("#EmailAddress");
const Password1 = document.querySelector("#Password");

const form = document.querySelector(".form");
const wrapper = document.querySelector("#todo-wrapper");

const ConfirmPassword = document.querySelector(".ConfirmPassword");
const Surname = document.querySelector(".Surname");
const Name = document.querySelector(".Name");
const MobileNumber = document.querySelector(".MobileNumber");
const EmailAddres = document.querySelector(".EmailAddress");
const Password = document.querySelector(".Password");
function createItem(Name, value) {
  i++;
  return `
  <div <h1 class = "Surname">${Name}${value}</h1></div>
     `;
}
let i = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  Surname.textContent = Surname1.value;
  Name.textContent = Name1.value;
  MobileNumber.textContent = EmailAddres1.value;
  EmailAddres.textContent = ConfirmPassword1.value;
  Password.textContent = Password1.value;
  ConfirmPassword.textContent = ConfirmPassword1.value;
  Surname1.value = "";
});
