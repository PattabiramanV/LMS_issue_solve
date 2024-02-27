"use strict";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, getDoc, getDocs, doc, setDoc, updateDoc, addDoc,  collection } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB-XQdiHjT82q_r5MVNFgpyUsaU2WMvik",
  authDomain: "dckap-lms-project.firebaseapp.com",
  projectId: "dckap-lms-project",
  storageBucket: "dckap-lms-project.appspot.com",
  messagingSenderId: "1022626638467",
  appId: "1:1022626638467:web:2c8f79d5614281ac7b49b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

const exploreCoursesContainer = document.querySelector(".articles");
// Use Local Storage to store enrolled courses
let enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

exploreCoursesContainer.addEventListener("click", async function (event) {
  try {
    const clickedCourseContainer = event.target.closest(".article-wrapper");
    const courseContainers =
      exploreCoursesContainer.querySelectorAll(".article-wrapper");
    let index = Array.from(courseContainers).findIndex(
      (container) => container === clickedCourseContainer
    );

    if (enrolledCourses.includes(index)) {
      console.log("Course already enrolled!");
      return;
    }

    if (enrolledCourses.length >= 5) {
      console.log("You can only enroll in 5 courses.");
      return;
    }

    const enrolledCourseContainer = document.createElement("div");
    enrolledCourseContainer.classList.add("Progress_bar");

    const courseDetails = [
      { name: "HTML", imgSrc: "./Assests/html.webp" },
      { name: "CSS", imgSrc: "./Assests/css.webp" },
      { name: "JavaScript", imgSrc: "./Assests/js.webp" },
      {
        name: "MySQL",
        imgSrc: "./Assests/7723d1592a0b454cb59a32cf5ab35642-SQL2.webp",
      },
      { name: "PHP", imgSrc: "./Assests/php.webp" },
    ];

    enrolledCourseContainer.innerHTML = `
            <div class="progress_language">
                <img src="${courseDetails[index].imgSrc}" alt="" class="enroll_img">
            </div>
            <hr>
            <div class="progress_status">
                <p class="enroll_language">${courseDetails[index].name}</p>
                <div class="percentage">
                    <p class="progress">In progress</p>
                    <span></span>
                </div>
            </div>
        `;

    const enrolledCoursesContainer = document.querySelector(
      ".progressing_bar .Progress_container"
    );
    enrolledCoursesContainer.appendChild(enrolledCourseContainer);

    await addDoc(collection(database, "enrolledCourses"), {
      name: courseDetails[index].name,
      imgSrc: courseDetails[index].imgSrc,
    });
    enrolledCourses.push(index);

    // Update Local Storage
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
  } catch (error) {
    console.error("Error:", error.message);
  }
});

// Retrieve data
window.addEventListener("load", async function () {
  try {
    const querySnapshot = await getDocs(
      collection(database, "enrolledCourses")
    );
    querySnapshot.forEach((doc) => {
      const enrolledCourseContainer = document.createElement("div");
      enrolledCourseContainer.classList.add("Progress_bar");

      enrolledCourseContainer.innerHTML = `
                <div class="progress_language">
                    <img src="${doc.data().imgSrc}" alt="" class="enroll_img">
                </div>
                <hr>
                <div class="progress_status">
                    <p class="enroll_language">${doc.data().name}</p>
                    <div class="percentage">
                        <p class="progress">In progress</p>
                        <span class="percentagecalculation"></span>
                    </div>
                </div>
            `;
      const enrolledCoursesContainer = document.querySelector(
        ".progressing_bar .Progress_container"
      );
      enrolledCoursesContainer.appendChild(enrolledCourseContainer);
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
});

// Nav bar
const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));
let content=document.querySelector(".menu_content");
let searchIcon=document.querySelector("#Sicon");
let headings=document.querySelectorAll("#headings")
let Dckaplogo=document.querySelector(".DCKAPlOGO")

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
  if (sidebar.classList.contains("hoverable") && sidebar.classList.contains("close")) {
    content.style.left = "0rem"; 
  }
});



darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  document.body.classList.toggle("dark-mode");
  searchIcon.style.color = body.classList.contains("dark") ? "white" : "black";
  headings.forEach((heading) => {
    if (body.classList.contains("dark")) {
        heading.style.color = "white";
    } else {
        heading.style.color = "#b95233";
    }
});
  Dckaplogo.src = body.classList.contains("dark")
    ? "./Assests/Dckapwhite.png"
    : "./Assests/Logodk.png";
});

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

let Certi_page=document.querySelector(".profile_certicate");

Certi_page.addEventListener("click",()=>{
  window.location.href="./certificate.html"
})


let logout =document.querySelector(".log_out")
     
logout.addEventListener("click",()=>{
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

document.querySelector('.profile_down').addEventListener('click', function() {
  localStorage.setItem('previous_location', window.location.href);
});


// Button Navigation

let Explorebtn = document.querySelectorAll('.read-more');
console.log(Explorebtn[0]);
Explorebtn.forEach(async(btn) => {
  let ref=doc(database,"Learning",'0');
  let get_data=await getDoc(ref);
  let find_language=0;

 
  btn.addEventListener( 'click',async (e)=>{

    if (btn === Explorebtn[0]) {
      // alert("bye")
      console.log("pattabi");

find_language='Html';

    } else if (btn === Explorebtn[1]) {
// alert("hi")
find_language='Css';

    } else if (btn === Explorebtn[2]) {

    }

   let data_get=await updateDoc(
      ref,{
      Find_Language_type:find_language


      }
    )
    window.location.href='learning_content.html'
  });
});

// Percentage Calculation


