"use strict";

var sign_in_btn = document.querySelector("#sign-in-btn");
var sign_up_btn = document.querySelector("#sign-up-btn");
var container = document.querySelector(".container");
sign_up_btn.addEventListener("click", function () {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", function () {
  if (email_acc.value == "" || pass_acc.value == "" || username.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "please fill your field",
      showConfirmButton: false,
      timer: 1500
    }); // container.classList.remove("sign-up-mode");
  } else {
    container.classList.remove("sign-up-mode");
  }
});
var email = document.getElementById("email");
var password = document.getElementById("password"); // id for creating account

var username = document.getElementById("username");
var pass_acc = document.getElementById("pass-acc");
var email_acc = document.getElementById("email-acc"); // for login button

var login = document.getElementById("login"); // for sign in button

var sign_in = document.getElementById("sign-in-btn"); // for create acc btn

var create_acc = document.getElementById("create-acc");
var link = document.getElementById("link"); // for create_acc

create_acc.addEventListener("click", function () {
  var userData = {
    username: username.value,
    email_acc: email_acc.value,
    pass_acc: pass_acc.value
  };

  if (username.value == "" || email_acc.value == "" || pass_acc.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "please fill your field",
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Account is Created",
      showConfirmButton: false,
      timer: 1500
    });
    var localData = localStorage.setItem("user", JSON.stringify(userData));
  }
});
login.addEventListener("click", function () {
  var getData = JSON.parse(localStorage.getItem("user"));
  console.log(getData);

  if (email.value == getData.email_acc && password.value == getData.pass_acc) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Acc is Login",
      showConfirmButton: false,
      timer: 1500
    });
    login.innerHTML = "<a class=\"login-a\" href=\"src/dashboard.html\">login</a>"; // console.log(location.href);

    window.location.assign("./dashboard.html"); //  window.open("dashboard.html", "_self");
    // login.innerHTML = `<a href="./dashboard.html">login</a>`
    // console.log(location.href);
  } else if (email.value == "" || password.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "please fill your field",
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    alert("wrong email or password");
  }
}); // sign_in_btn.addEventListener("click",function(){
//   if(email_acc.value == "" || pass_acc.value == "" || username.value == ""){
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "please fill your field",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   container.classList.remove("sign-up-mode");
//   }
// })

login.addEventListener("click", function () {
  var getData = JSON.parse(localStorage.getItem("user"));
  console.log(getData);

  if (email.value == getData.email_acc && password.value == getData.pass_acc) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Acc is Login",
      showConfirmButton: false,
      timer: 1500
    });
    localStorage.setItem("isLoggedIn", true); // Set isLoggedIn to true

    window.location.assign("./dashboard.html");
  } else if (email.value == "" || password.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "please fill your field",
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    alert("wrong email or password");
  }
});
create_acc.addEventListener("click", function () {
  //... (rest of the code remains the same)
  localStorage.setItem("isLoggedIn", true); // Set isLoggedIn to true
  //...
});