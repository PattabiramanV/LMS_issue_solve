


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


  import { getFirestore,getDocs,setDoc,doc,collection,getDoc,addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


let db=getFirestore(app);


let username = document.getElementById("user");
let email_box = document.getElementById("mail_id");
let create_password = document.getElementById("create_ps");
let sign_up_btn = document.getElementById("sign_up_btn");
let otp_random;
console.log(username);
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

// --------otp generating---------
let mail_id_inputbox = document.getElementById("mail_id");
let username_inputbox = document.getElementById("user").value;
 document.querySelector(".container").style.display = "block";
 document.querySelector("#sign_up").style.display="none";
 document.querySelector(".side_image").style.display="none"
    otp_random=Math.floor(Math.random()*100000);
    console.log(otp_random);
    let mail_msg= `Hi ${username_inputbox} Welcome to our website,please verify your email by entering the otp mentioned below
            OTP : <b>${otp_random}</b>`
            Email.send({
              SecureToken : "3530e414-b30b-4087-819e-ce07fc9da7b5",
              To : mail_id_inputbox.value,
              From : "dckaplms@gmail.com",
              Subject : "This is the subject",
              Body : mail_msg
          }).then(
            message => alert(message)
          )
          .catch(err => alert(err));
          }

  // -------otp verify button-----
  let getref=collection(db,"SignUp_details");
  let getdata =await  getDocs(getref);
  let id=getdata.size;

let otp_btn=document.getElementById("otp_btn")
let otp_inputbox=document.getElementById("otp_value")
otp_btn.addEventListener("click", verified)

 function verified (event){
  event.preventDefault();
   
  if(otp_inputbox.value==" ")
  {
    alert("Enter a OTP")
  }
  if(otp_inputbox.value == otp_random)
  {
   

        // console.log(id);

    let ref=doc(db,"SignUp_details",`${id++}`)

    let dataReference =  setDoc(
      ref,{
         username:username.value,
         email:email_box.value,
         password:create_password.value
      }
    ).then(()=>{
      alert("Account created successfully");
  })
    
  document.querySelector(".container").style.display = "none";
  document.getElementById('loadingOverlay').style.visibility = 'visible';

  setTimeout(() => {
      window.location.href = './login.html';
  }, 2000);
        
  }
  
  else{
    alert("invalid")
  }
  
 }
  




   
// --------password icon-----------
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
// -----------already have an account login----------
let exist_login = document.getElementById("underline_btn");

exist_login.addEventListener("click", login_page);

function login_page() {
    document.getElementById('loadingOverlay').style.visibility = 'visible';
    setTimeout(() => {
        window.location.href = './login.html';
    }, 2000);
}


