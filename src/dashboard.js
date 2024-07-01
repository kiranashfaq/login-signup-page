var cartBtn = document.querySelectorAll(".but2");
var card = document.getElementById("cart-card");
var removeBtn = document.getElementById("remove-btn");
var minus_btn = document.querySelectorAll("#minus-btn");
var plus_btn = document.getElementById("plus-btn");
var remove_acc = document.getElementById("remove-acc");
var display = document.getElementById("display");
var username = document.getElementById("username");
var pass_acc = document.getElementById("pass-acc");
var email_acc = document.getElementById("email-acc");
var but_cart = document.querySelectorAll(".but-cart");

var number = 0;
cartBtn.forEach((button) => {
  button.addEventListener("click", function () {
    const productId = this.getAttribute("data-id");
    card.style.display = "block";
    card.style.display = "flex";
  });
});
removeBtn.addEventListener("click", function () {
  card.style.display = "none";
});
// minus_btn.addEventListener("click", function () {
//   display.innerText = --number
// })
minus_btn.forEach((button) => {
  button.addEventListener("click", function () {
    display.innerText = --number;
  });
});
plus_btn.addEventListener("click", function () {
  display.innerText = ++number;
});
var username = document.getElementById("username");
var pass_acc = document.getElementById("pass-acc");
var email_acc = document.getElementById("email-acc");
remove_acc.addEventListener("click", function () {
  //   username.value = "";
  //   pass_acc.value = "";
  //   email_acc.value = "";
  //  username.style.border = "none";
  window.location.href = "../index.html";

  localStorage.clear();
  Swal.fire("your Account is removed");
});
// but_cart.forEach((button) => {
//   button.addEventListener("click", function () {
//     const productId = this.getAttribute("data-id");
//     card_neck.style.display = "block";
//     card_neck.style.display = "flex";
//   });
// });
