const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
   if(email_acc.value == "" || pass_acc.value == "" || username.value == ""){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "please fill your field",
      showConfirmButton: false,
      timer: 1500,
    });
  // container.classList.remove("sign-up-mode");
  }
 
  else{
container.classList.remove("sign-up-mode");
    
  }
});
var email = document.getElementById("email");
var password = document.getElementById("password");
// id for creating account
var username = document.getElementById("username");
var pass_acc = document.getElementById("pass-acc");
var email_acc = document.getElementById("email-acc");
// for login button
var login = document.getElementById("login");
// for sign in button
var sign_in = document.getElementById("sign-in-btn");
// for create acc btn
var create_acc = document.getElementById("create-acc");

var link = document.getElementById("link")
// for create_acc

create_acc.addEventListener("click", function () {

  localStorage.setItem("isLoggedIn", true);
  var userData = {
    username: username.value,
    email_acc: email_acc.value,
    pass_acc: pass_acc.value,
  };
  if (username.value == "" || email_acc.value == "" || pass_acc.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "please fill your field",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Account is Created",
      showConfirmButton: false,
      timer: 1500,
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
      timer: 1500,
    });
    login.innerHTML = `<a class="login-a" href="src/dashboard.html">login</a>`
    // console.log(location.href);
     window.location.assign("./dashboard.html")
    //  window.open("dashboard.html", "_self");
    // login.innerHTML = `<a href="./dashboard.html">login</a>`

    // console.log(location.href);
    
  } else if (email.value == "" || password.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "please fill your field",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    alert("wrong email or password");
  }
});









  const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('eye-icon');

  eyeIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      eyeIcon.classList.remove('fa-eye-slash');
    }
  });

    const passwordInput_2 = document.getElementById("pass-acc");
    const eyeIcon_2 = document.getElementById("eye-icon-2");

    eyeIcon_2.addEventListener("click", () => {
      if (passwordInput_2.type === "password") {
        passwordInput_2.type = "text";
        eyeIcon_2.classList.add("fa-eye-slash");
      } else {
        passwordInput_2.type = "password";
        eyeIcon_2.classList.remove("fa-eye-slash");
      }
    });























    let users = {};
    let isLoggedIn = false;

    // Function to register a new user
    function register() {
      let newUsername = document.getElementById("new-username").value;
      let newPassword = document.getElementById("new-password").value;
      users[newUsername] = newPassword;
      alert("Account created successfully!");
      isLoggedIn = true;
      showDashboard();
    }

    // Function to login an existing user
    function login() {
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      if (users[username] && users[username] === password) {
        alert("Login successful!");
        isLoggedIn = true;
        showDashboard();
      } else {
        alert("Invalid username or password. Try again!");
      }
    }

    // Function to show the dashboard
    function showDashboard() {
      if (isLoggedIn) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("register-form").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
      }
    }

    // Add event listeners to the buttons
    document.getElementById("register-btn").addEventListener("click", register);
    document.getElementById("login-btn").addEventListener("click", login);

    // Hide the dashboard by default
    document.getElementById("dashboard").style.display = "none";

    // Check if the user is logged in on page load
    if (isLoggedIn) {
      showDashboard();
    }