let arr = [
  document.querySelector("#Surname"),
  document.querySelector("#Name"),
  document.querySelector("#MobileNumber"),
  document.querySelector("#EmailAddress"),
  document.querySelector("#Password"),
  document.querySelector("#ConfirmPassword"),
];
const form = document.querySelector(".form");
const wrapper = document.querySelector("#todo-wrapper");

function createItem(Name, value) {
  i++;
  return `
  <div <h1 class = "Surname">${Name}${value}</h1></div>
     `;
}
let obj = [
  "Surname",
  "Name",
  "Mobile Number",
  "Email Addres",
  "Password",
  "Confirm Password",
];

let i = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = arr[i].value;
  let num = obj[i];
  const item = createItem(num, todo);
  wrapper.innerHTML += item;
  arr[i].value = "";
  field.focus();
  console.log(arr[i].value);
  i++;
});
