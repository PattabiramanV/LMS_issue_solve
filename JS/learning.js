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
  
let db=getFirestore(app);
let find_language=0;
let id=0;
if(localStorage.getItem("userdetails")){
  var userDetailsString = localStorage.getItem("userdetails");
  var userDetails = JSON.parse(userDetailsString);
  id=userDetails.user_id;
}

else{
  setTimeout(()=>{
  window.location.href='./signup.html';

   } ,2000);
}


let all_learn_more_btn=document.querySelectorAll(".learn_more_btn");

all_learn_more_btn.forEach((btn,index)=>{

  
    btn.addEventListener("click",async()=>{

find_language=btn.parentElement.previousElementSibling.previousElementSibling.firstElementChild.lastElementChild.innerHTML;
find_language =find_language[0]+find_language.slice(1,find_language.length).toLowerCase();

let ref_data=doc(db,"Learning",`User=${id}`);
let get_data= await getDoc(ref_data);
let find_language_unlock_module=get_data.data()[find_language+'_unlock_total_module'];

 let data_set=await updateDoc(
    ref_data,{
        Find_Language_type:find_language,
        find_index:find_language_unlock_module
        
    }
).then(()=>{
    
}).catch((err)=>{
    console.log(err);
});
    window.location.href='learning_content.html';

    })
});

let all_percentage_show_tag=document.querySelectorAll("strong");

  let ref=doc(db,'Learning',`User=${id}`);
  let data_ref=await getDoc(ref);

all_percentage_show_tag[0].innerHTML=data_ref.data().Html_Total_Percentage;
all_percentage_show_tag[1].innerHTML=data_ref.data().Css_Total_Percentage;
all_percentage_show_tag[2].innerHTML=data_ref.data().Javascript_Total_Percentage;
all_percentage_show_tag[3].innerHTML=data_ref.data().Mysql_Total_Percentage;
all_percentage_show_tag[4].innerText=data_ref.data().Php_Total_Percentage;




//................................. Nav bar...................................//


const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});


//............................Dark_Mode......................................//

let Dckaplogo = document.querySelector(".DCKAPlOGO");
Dckaplogo.addEventListener("click",()=>{
  window.location.href='./index.html'
})
let searchicon = document.querySelector(".fas");
function toggleDarkMode() {

  const isDarkMode = body.classList.toggle("dark");
  document.body.classList.toggle("dark-mode");
  searchicon.style.color = isDarkMode ? "white" : "black";
 
  Dckaplogo.src = body.classList.contains("dark")
  ? "./Assests/Dckapwhite.png"
  : "./Assests/Logodk.png";
 

  sessionStorage.setItem("darkMode", isDarkMode);
}

const storedDarkMode = sessionStorage.getItem("darkMode");
if (storedDarkMode === "true") {
  toggleDarkMode();
}

darkLight.addEventListener("click", toggleDarkMode);



// Profile

let profile_Dropdown = document.querySelector(".profile_bar_list");
let profile_navigate = document.querySelector(".profile");

profile_navigate.addEventListener("click", (event) => {
  event.stopPropagation();
  profile_Dropdown.style.display = "block";
});

document.addEventListener("click", (event) => {
  if (
    !profile_navigate.contains(event.target) &&
    !profile_Dropdown.contains(event.target)
  ) {
    profile_Dropdown.style.display = "none";
  }
});


// profile_drop

let profile_page = document.querySelector(".profile_down");
profile_page.addEventListener("click", () => {
  window.location.href = "./profile.html";
});

let Course_navigate = document.querySelector(".Course_Down");
Course_navigate.addEventListener("click", () => {
  window.location.href = "./Courses.html";
});

let Certi_page = document.querySelector(".profile_certicate");

Certi_page.addEventListener("click", () => {
  window.location.href = "./certificate.html";
});

let logout = document.querySelector(".log_out");

logout.addEventListener("click", () => {
  window.location.href = "./login.html";
});


// Local storage get data

try {
  const profileImg = document.querySelector(".profile");
  const docRef = doc(db, 'users_img', `${id}`);
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
    const docRef = doc(db, 'users_img', `${id}`);
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



