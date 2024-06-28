const field1 = document.querySelector("#Surname");
const field2 = document.querySelector("#Name");
const field3 = document.querySelector("#MobileNumber");
const field4 = document.querySelector("#EmailAddress");
const field5 = document.querySelector("#Password");
const field6 = document.querySelector("#ConfirmPassword");
const button = document.querySelector(".btn1");
const button1 = document.querySelector(".btn2");
const button2 = document.querySelector(".btn3");
const button3 = document.querySelector(".btn4");
const button4 = document.querySelector(".btn5");
const button5 = document.querySelector(".btn6");
const wrapper = document.querySelector("#todo-wrapper");
let i = -1;
function createItem(Name, value) {
  i++;
  return `
  <div <h1 class = "Surname">${Name}:${value}</h1></div>
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
button &&
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const todo = field1.value;
    let num = obj[0];
    const item = createItem(num, todo);
    wrapper.innerHTML += item;
    field.value = "";
    field.focus();
  });
button1 &&
  button1.addEventListener("click", function (event) {
    event.preventDefault();
    const todo = field2.value;
    let num = obj[1];
    const item = createItem(num, todo);
    wrapper.innerHTML += item;
    field.value = "";
    field.focus();
  });
button2 &&
  button2.addEventListener("click", function (event) {
    event.preventDefault();
    const todo = field3.value;
    let num = obj[2];
    const item = createItem(num, todo);
    wrapper.innerHTML += item;
    field.value = "";
    field.focus();
  });
button3 &&
  button3.addEventListener("click", function (event) {
    event.preventDefault();
    const todo = field4.value;
    let num = obj[3];
    const item = createItem(num, todo);
    wrapper.innerHTML += item;
    field.value = "";
    field.focus();
  });
button4 &&
  button4.addEventListener("click", function (event) {
    event.preventDefault();
    const todo = field5.value;
    let num = obj[4];
    const item = createItem(num, todo);
    wrapper.innerHTML += item;
    field.value = "";
    field.focus();
  });
button5 &&
  button5.addEventListener("click", function (event) {
    event.preventDefault();
    const todo = field6.value;
    let num = obj[5];
    const item = createItem(num, todo);
    wrapper.innerHTML += item;
    field.value = "";
    field.focus();
  });
