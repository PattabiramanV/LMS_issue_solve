"use strict"

// Nav bar
const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));
let content = document.querySelector(".menu_content");
let searchIcon = document.querySelector("#Sicon");
let headings = document.querySelectorAll("#headings");
let Dckaplogo = document.querySelector(".DCKAPlOGO");

Dckaplogo.addEventListener("click",()=>{
    window.location.href='./index.html'
})



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

// Function to toggle dark mode


function toggleDarkMode() {
  const isDarkMode = body.classList.toggle("dark");
  document.body.classList.toggle("dark-mode");
  headings.forEach((heading) => {
    if (isDarkMode) {
      heading.style.color = "white";
    } else {
      heading.style.color = "#b95233";
    }
    Dckaplogo.src = body.classList.contains("dark")
      ? "./Assests/Dckapwhite.png"
      : "./Assests/Logodk.png";
      sessionStorage.setItem("darkMode", isDarkMode);
  })
}




const storedDarkMode = sessionStorage.getItem("darkMode");
if (storedDarkMode === "true") {
  toggleDarkMode();
}

darkLight.addEventListener("click", toggleDarkMode);

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

// Course Drop

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

let left_side_bar = document.querySelectorAll(".navlink");

left_side_bar[0].addEventListener("click", () => {
  window.location.href = "./index.html  ";
});

left_side_bar[1].addEventListener("click", () => {
  window.location.href = "./Learning.html  ";
});
left_side_bar[2].addEventListener("click", () => {
  window.location.href = "./dashboard.html";
});
left_side_bar[3].addEventListener("click", () => {
  window.location.href = "./Roadmap.html";
});

document.querySelector(".profile_down").addEventListener("click", function () {
  localStorage.setItem("previous_location", window.location.href);
});



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  getDoc,
  doc,
  getDocs,
  collection,
  updateDoc,
  addDoc,
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
let id=userDetails.user_id;
console.log(id);

let Explorebtn = document.querySelectorAll(".read-more");
console.log();
Explorebtn.forEach(async (btn) => {
  let ref = doc(database, "Learning", `User=${id}`);
  let get_data = await getDoc(ref);
  let find_language = 0;

  btn.addEventListener("click", async (e) => {
    if (btn == Explorebtn[0]) {
      find_language = "Html";
    } else if (btn == Explorebtn[1]) {
      find_language = "Css";
    } else if (btn == Explorebtn[2]) {
      find_language = "Javascript";
    } else if (btn === Explorebtn[3]) {
      find_language = "Mysql";
    }
    else{
        find_language="Php"
    }
    let find_language_unlock_module=get_data.data()[find_language+"_unlock_total_module"]

    let data_get = await updateDoc(ref, {
      Find_Language_type: find_language,
      find_index: find_language_unlock_module
    });
    window.location.href = "./learning_content.html";
  });
});


let Progressbarconatiner=document.querySelector(".progressing_bar")

try {
  let userRef = doc(database, "Learning", `User=${id}`);
  let userData = await getDoc(userRef);
  
  // Check if the user data exists

  const languages = ["Html", "Css", "Javascript", "Mysql", "Php"];

  languages.forEach(language => {
    const userLearningData = userData.data()[`${language}_Complete_Module`];
    console.log(`${language} Complete Module:`, userLearningData);

    if (userLearningData > 1) {
      const completedCourseContainer = document.createElement("div");
      completedCourseContainer.classList.add("Progress_bar");
      completedCourseContainer.innerHTML = `
        <div class="progress_language">
          <img src="./Assests/${language.toLowerCase()}.webp" alt="" class="enroll_img">
        </div>
        <hr>
        <div class="progress_status">
          <p class="enroll_language">${language}</p>
          <div class="percentage">
            <p class="progress">In Progress</p>
            <span class="percentage_cal"></span>
          </div>
        </div>
      `;
      
      // Append the completed course container to the DOM
      Progressbarconatiner.style.display="block"
      const completedCoursesContainer = document.querySelector(
        ".progressing_bar .Progress_container")
      completedCoursesContainer.appendChild(completedCourseContainer);
    }  else {
      console.log(`User's ${language}_Complete_Module is not greater than 1`);
    }
  });

  let percentages = document.querySelectorAll(".percentage_cal");
  languages.forEach((language1, index) => {
    percentages[index].innerHTML = userData.data()[`${language1}_Total_Percentage`] + "%";
  });
} 
catch (error) {
  console.error("Error fetching user data:", error);
}


// Button Navigation With Learning Page






// Fetch with local storage Profile Img


// let storeprofileImg=localStorage.getItem("imageURL");
// const profileImg = document.querySelector(".profile");
// profileImg.src = storeprofileImg
// Img Effect 

document.addEventListener("DOMContentLoaded", function () {
  const storedImageURL = localStorage.getItem("imageURL");
  if (storedImageURL) {
      const profileImg = document.querySelector(".profile");
      profileImg.src = storedImageURL;
  }
});



// SCroll bar actions 


// Calculate the number of child elements appended to .Progress_container
// let progress=document.querySelector(".progressing_bar")
// const progressContainer = document.querySelector('.Progress_container');
// console.log(progressContainer);
// const numberOfChildren = progressContainer.children.length;
// console.log(numberOfChildren);

// // Conditionally add a CSS class to enable the scrollbar
// if (numberOfChildren > 4) {
//   console.log("hi");
//     progressContainer.classList.add('scrollbar-enabled');
// } else {
//     progressContainer.classList.remove('scrollbar-enabled');
// }


// profile shown

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
  const ProfileMainImg=this.document.querySelector(".profile_img")

  try {
    const docRef = doc(database, 'users_img', `${id}`);
    const docSnapimg = await getDoc(docRef);

    if (docSnapimg.exists()) {
      const userDataimg = docSnapimg.data();
      profileImg.src = userDataimg.imageURL;
      ProfileMainImg.src=userDataimg.imageURL
    } else {
      console.log("The image is not found in Firestore.");
    }
  } catch (error) {
    console.error("Error getting document:", error);
    alert("Error getting user image. Please try again.");
  }
});