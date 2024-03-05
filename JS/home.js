"use strict"

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
  import { getFirestore, getDoc, getDocs, doc, setDoc, updateDoc, addDoc,  collection } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
  
let database=getFirestore(app);

// var  id=userDetails.user_id;
function singup_check_Fun(){

if(localStorage.getItem("userdetails")){
  var userDetailsString = localStorage.getItem("userdetails");
  var userDetails = JSON.parse(userDetailsString);
 var  id=userDetails.user_id;
}

else{
  setTimeout(()=>{
  window.location.href='./signup.html';

   } ,2000);
}
}



let home=document.querySelector(".nav_home")
console.log(home)
let learning=document.querySelector(".nav_learning")
let dashboard=document.querySelector(".nav_dashboard")
let roadmap=document.querySelector(".nav_roadmap")
let navlogin=document.querySelector(".login")
let navsign=document.querySelector(".signup")
let searchbtn=document.querySelector(".button_explore")
let htmlbtn=document.querySelector(".html_btn")
let cssbtn=document.querySelector(".css_btn")
let jsbtn=document.querySelector(".js_btn")
let mysqlbtn=document.querySelector(".mysql_btn")
let phpbtn=document.querySelector(".php_btn")
let profile=document.querySelector(".profile");
let singup_login_btn=document.querySelector(".slide-controls");
// learning.addEventListener("click",()=>{
//     alert("learning menu clicked")
// });

dashboard.addEventListener("click",()=>{
    window.location.href="./dashboard.html";
})

roadmap.addEventListener("click",()=>{
    window.location.href="./Roadmap.html";
})

learning.addEventListener("click",()=>{
    window.location.href="./Learning.html";
})





navlogin.addEventListener("click",()=>{
     window.location.href='./login.html'
})

navsign.addEventListener("click",()=>{
    // alert("sign_up button clicked")
    window.location.href='./signup.html';


   
})



let find_language = 0;



let  Explorebtn=document.querySelectorAll(".enroll_btn")

Explorebtn[0].addEventListener("click",()=>{

find_language = 'Html';
language_change_Fun();

});

Explorebtn[1].addEventListener("click",()=>{

  find_language = 'Css';
  language_change_Fun();

  });

  Explorebtn[2].addEventListener("click",()=>{

    find_language = 'Javascript';
    language_change_Fun();
    });

    Explorebtn[3].addEventListener("click",()=>{

      find_language = 'Mysql';
      language_change_Fun();
      });

      Explorebtn[4].addEventListener("click",()=>{

        find_language = 'Php';
        language_change_Fun();
        });

async  function language_change_Fun(){

  singup_check_Fun();

  let ref = doc(database, "Learning", `User=${id}`);
  let get_data= await getDoc(ref);
let find_language_unlock_module=get_data.data()[find_language+'_unlock_total_module'];

  let set_data = await updateDoc(

    ref,{
      Find_Language_type:find_language,
        find_index:find_language_unlock_module
    }
  )
  window.location.href='./learning_content.html';
 }



// let left_side_bar=document.querySelectorAll(".navlink");

// left_side_bar[0].addEventListener("click",()=>{
//   window.location.href='./index.html'
// });

// left_side_bar[1].addEventListener("click",()=>{

//   window.location.href='./Learning.html'
// });
// left_side_bar[2].addEventListener("click",()=>{

//   window.location.href='./dashboard.html';
// });
// left_side_bar[3].addEventListener("click",()=>{

//   window.location.href='./Roadmap.html';
// });


// -------------loginvalidate----------
if(localStorage.getItem('userdetails')){
  // let sessionStorage_value=sessionStorage.getItem('userdetails') // key name of data in session or localstorage
  singup_login_btn.style.display = 'none';
  // navsign.style.display = 'none'; // login signup btn display off
  profile.classList.add('usrprofile');
  //get and rename the correct name of user profile
  // .usrprofile - css added feel free to change class names as u want
}
else{
  singup_login_btn.style.display = 'block';
  // navsign.style.display = 'block';
}
// Profile shown
  var userDetailsString = localStorage.getItem("userdetails");
  var userDetails = JSON.parse(userDetailsString);
 var  id=userDetails.user_id;
try {
  const profileImg = document.querySelector(".profile");
  const docRef = doc(database, 'users_img', `${id}`);
  const docSnapimg = await getDoc(docRef);

  if (docSnapimg.exists()) {
      const userDataimg = docSnapimg.data();
      profileImg.src = userDataimg.imageURL;
  } else {
      console.log("The image is not found in Firestore.");
  }
} catch (error) {
  console.error("Error getting document:", error);
  alert("Error getting user image. Please try again.");
}

window.addEventListener("load", async function () {
  const profileImg = document.querySelector(".profile");
 

  try {
    const docRef = doc(database, 'users_img', `${id}`);
    const docSnapimg = await getDoc(docRef);

    if (docSnapimg.exists()) {
      const userDataimg = docSnapimg.data();
      profileImg.src = userDataimg.imageURL;
    } else {
      console.log("The image is not found in Firestore.");
    }
  } catch (error) {
    console.error("Error getting document:", error);
    alert("Error getting user image. Please try again.");
  }
});


let profile_navigate=document.querySelector(".profile")
profile_navigate.addEventListener("click",()=>{
       window.location.href="./profile.html"
})