if(localStorage.getItem("userdetails") == null){
     window.location.href="./signup.html";
     setTimeout(()=>{
      window.location.href='./signup.html';
    },2000);
}

"use strict";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  getDoc,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  addDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB-XQdiHjT82q_r5MVNFgpyUsaU2WMvik",
  authDomain: "dckap-lms-project.firebaseapp.com",
  projectId: "dckap-lms-project",
  storageBucket: "dckap-lms-project.appspot.com",
  messagingSenderId: "1022626638467",
  appId: "1:1022626638467:web:2c8f79d5614281ac7b49b6",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

var userDetailsString = localStorage.getItem("userdetails");
var userDetails = JSON.parse(userDetailsString);
let id = userDetails.user_id;
console.log(id);

const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));
let content = document.querySelector(".menu_content");

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
  content.style.left = "1rem";
});

sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
  content.style.left = "1rem";
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
    content.style.left = "1rem";
  }
});

sidebar.addEventListener("mouseleave", () => {
  if (
    sidebar.classList.contains("hoverable") &&
    sidebar.classList.contains("close")
  ) {
    content.style.left = "0rem";
  }
});

let Dckaplogo = document.querySelector(".DCKAPlOGO");
Dckaplogo.addEventListener("click", () => {
  window.location.href = "./index.html";
});

// Function to toggle dark mode

function toggleDarkMode() {
  const isDarkMode = body.classList.toggle("dark");
  document.body.classList.toggle("dark-mode");
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

// Profile DropDown Work

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

// Navigating into learning page

let headingnavigate = document.querySelectorAll("#navheading");
console.log(headingnavigate);

headingnavigate.forEach(async (btn) => {
  let ref = doc(database, "Learning", `User=${id}`);
  let get_data = await getDoc(ref);
  let find_language = 0;
  

  btn.addEventListener("click", async (e) => {
    if (btn == headingnavigate[0]) {
      find_language = "";
    } else if (btn == headingnavigate[1]) {
      find_language = "Html";
    } else if (btn == headingnavigate[2]) {
      find_language = "Css";
    } else if (btn === headingnavigate[3]) {
      find_language = "Javascript";
    } else if(btn===headingnavigate[5]){
      find_language = "Mysql";
    }
    else{
         find_language="Php";
    }
    let find_language_unlock_module=get_data.data()[find_language+"_unlock_total_module"]
    let data_get = await updateDoc(ref, {
      Find_Language_type: find_language,
      find_index: find_language_unlock_module,
    });
    window.location.href = "./learning_content.html";
  });
});


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


// // navlink active
// const roadmapLink = document.getElementById('roadmap_link');


// roadmapLink.addEventListener('click', function(event) {
//   event.preventDefault();

//   document.querySelectorAll('.nav_link').forEach(link => {
//     link.classList.remove('active');
//   });
// })


// // Get all elements with the class 'nav_link'
// const navLinks = document.querySelectorAll('.nav_link');


// navLinks.forEach(link => {
//   link.addEventListener('click', function(event) {
    
//     event.preventDefault();


//     navLinks.forEach(navLink => {
//       navLink.classList.remove('active');
//     });

//     link.classList.add('active');
//   });
// });



// Naviagatin to navlink


// Get all elements with the class 'nav_link'
// const navLinks = document.querySelectorAll('.nav_link');



// Loop through each nav link
// navLinks.forEach(link => {
//   // Add click event listener to each nav link
//   link.addEventListener('click', function(event) {
//     // Prevent default link behavior
//     event.preventDefault();

//     // Remove 'active' class from all nav links
//     navLinks.forEach(navLink => {
//       navLink.classList.remove('active');
//     });

//     // Add 'active' class to the clicked link
//     link.classList.add('active');
//   });
// });

// // Get the "Roadmap" link element
// const roadmapLink = document.getElementById('roadmap_link');

// // Add click event listener to the "Roadmap" link
// roadmapLink.addEventListener('click', function(event) {
//       window.location.href='./Roadmap.html'
// });
