
"use strict";

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDB-XQdiHjT82q_r5MVNFgpyUsaU2WMvik",
    authDomain: "dckap-lms-project.firebaseapp.com",
    projectId: "dckap-lms-project",
    storageBucket: "dckap-lms-project.appspot.com",
    messagingSenderId: "1022626638467",
    appId: "1:1022626638467:web:2c8f79d5614281ac7b49b6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);






let sign_form = document.getElementById("sign_up");
let username = document.getElementById("user");
let email_box = document.getElementById("mail_id");
let create_password = document.getElementById("create_ps");
let sign_up_btn = document.getElementById("sign_up_btn");



sign_up_btn.addEventListener("click", form_submit);

function form_submit(event) {
    // console.log("hi");
    event.preventDefault();
    var usernameValue = username.value; //inputbox values
    var emailValue = email_box.value;
    var createPasswordValue = create_password.value;

    var passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&])[A-Za-z\d!@#$%&]{8,}$/;
    var nameRegex = /[a-z]{3,}/i; 
    var mailRegex = /([a-z0-9.+-]+)@[a-zA-Z0-9.+]+/; 

    var invalid_name = document.querySelector(".invalid_name");
    var invalid_mail = document.querySelector(".invalid_mail");
    var invalid_password = document.querySelector(".invalid_password");

    if (!usernameValue.match(nameRegex)) {
        invalid_name.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Invalid Name.';
        invalid_name.style.color = "red";
        setTimeout(() => {
            invalid_name.textContent = "";
        }, 2000);
        return;
    }

    if (!mailRegex.test(emailValue)) {
        invalid_mail.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Invalid Mail.';
        invalid_mail.style.color = "red";
        setTimeout(() => {
            invalid_mail.textContent = "";
        }, 2000);
        return;
    }

    if (!passwordCriteria.test(createPasswordValue)) {
        invalid_password.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Invalid password.';
        invalid_password.style.color = "red";
        setTimeout(() => {
            invalid_password.textContent = "";
        }, 2000);
        return;
    }

}
let icon_eye=document.getElementById("icon_eye")
icon_eye.innerHTML=` <i id="icon_eye" class="fa-solid fa-eye-slash"></i>`


icon_eye.addEventListener("click",changeicon)
 function changeicon()
{
if (create_password.type =='password') {
    create_password.type='text'
    icon_eye.innerHTML=` <i id="icon_eye" class="fa-solid fa-eye"></i>` 
}
else if (create_password.type =='text') {
    create_password.type='password'
    icon_eye.innerHTML=` <i id="icon_eye" class="fa-solid fa-eye-slash"></i>`
    
}
}


let exist_login = document.getElementById("underline_btn");

exist_login.addEventListener("click", login_page);

function login_page() {
    document.getElementById('loadingOverlay').style.visibility = 'visible';
    setTimeout(() => {
        window.location.href = 'http://127.0.0.1:5501/login.html';
    }, 2000);
}