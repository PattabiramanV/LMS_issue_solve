let backtosignup=document.getElementById("backto_signup")
backtosignup.addEventListener("click", signup_page);

function signup_page() {
    document.getElementById('loadingOverlay').style.visibility = 'visible';
    setTimeout(() => {
        window.location.href = './signup.html';
    }, 2000);
}

// ---------password icon--------
let log_username=document.getElementById("log")
let log_password=document.getElementById("log_pass")
let login_button=document.getElementById("login_btn")

let icon_eye=document.getElementById("icon_eyeforpassword")
icon_eye.innerHTML=` <i id="icon_eye" class="fa-solid fa-eye-slash"></i>`


icon_eye.addEventListener("click",changeicon)
 function changeicon()
{
if (log_password.type =='password') {
    log_password.type='text'
    icon_eye.innerHTML=` <i id="icon_eye" class="fa-solid fa-eye"></i>` 
}
else if (log_password.type =='text') {
    log_password.type='password'
    icon_eye.innerHTML=` <i id="icon_eye" class="fa-solid fa-eye-slash"></i>`
    
}
}


// -----login validation----

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
let getref=collection(db,"SignUp_details");
let getdata =await  getDocs(getref);
// let id=getdata.size;

login_button.addEventListener("click",login)

function login(event)
{
  event.preventdefault();
  console.log("hi");
// getdata.forEach((record)=>{
//     console.log(record.username);
//     console.log(record.data());
// });

}