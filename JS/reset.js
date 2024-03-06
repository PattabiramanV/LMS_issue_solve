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


import { getFirestore,getDocs,setDoc,doc,collection,getDoc,addDoc,updateDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


let db=getFirestore(app);
let getref=collection(db,"SignUp_details");
let getdata =await  getDocs(getref);
let id=getdata.size;

let newpswrd= document.querySelector("#new")
let confirm=document.querySelector("#confirm")
let change_btn = document.querySelector("#Reset_button");

change_btn.addEventListener("click", (event) => {
    event.preventDefault();

    let new_ps = document.querySelector("#new").value;
    let confirm_resetpass = document.querySelector("#confirm").value;

    if (confirm_resetpass !== new_ps) {
        alert("Passwords does not match");
    }
    else if(confirm_resetpass =="" && new_ps == "")
    {
      alert("Enter a password")
    }
     else {
        const ref = doc(db, "SignUp_details",`${id}`); 

        updateDoc(ref, {
          password: new_ps,
          confirmPassword :confirm_resetpass,
        }).then(() => {
            alert("Updated Successfully");
            window.location.href='./login.html'
        })
    }    
});

// -----------toolTip----
let min_length = document.getElementById("minimum_len")
let lowercase = document.getElementById("Low")
let uppercase = document.getElementById("upp")
let number = document.getElementById("num")
let symbol = document.getElementById("spcl")

newpswrd.addEventListener("keyup", (event) => {
  event.preventDefault();
  document.querySelector(".tool").style.display = "block";


  if (newpswrd.value.length >= 8) {
    min_length.classList.remove("invalid");
    min_length.classList.add("valid");
  }
  else {
    min_length.classList.remove("valid");
    min_length.classList.add("invalid");
  }
  var lowercase_letters = /[a-z]/g;
  if (newpswrd.value.match(lowercase_letters)) {

    lowercase.classList.remove("invalid");
    lowercase.classList.add("valid");
  }
  else {
    lowercase.classList.remove("valid");
    lowercase.classList.add("invalid");
  }
  var uppercase_letters = /[A-Z]/g;
  if (newpswrd.value.match(uppercase_letters)) {
    uppercase.classList.remove("invalid");
    uppercase.classList.add("valid");
  }
  else {
    uppercase.classList.remove("valid");
    uppercase.classList.add("invalid");
  }
  var Num_value = /[0-9]/g;
  if (newpswrd.value.match(Num_value)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  }
  else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  var symb = /[ ""!"#$%&'()*+,-./:;<=>?@^_`~{}|]/g;

  if(newpswrd.value.match(symb)) {
    symbol.classList.remove("invalid");
    symbol.classList.add("valid");
  }
  else {
    symbol.classList.remove("valid");
    symbol.classList.add("invalid");
  }


})
confirm.addEventListener("click",()=>{
  document.querySelector(".tool").style.display = "none";
   
})