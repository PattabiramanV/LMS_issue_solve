"use strict";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
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

const exploreCoursesContainer = document.querySelector('.course_card');

exploreCoursesContainer.addEventListener('click', async function(event) {
    try {
        const clickedCourseContainer = event.target.closest('.Progress_bar_Course');
        const courseContainers = exploreCoursesContainer.querySelectorAll('.Progress_bar_Course');
        let index = Array.from(courseContainers).findIndex(container => container === clickedCourseContainer);

        const enrolledCourseContainer = document.createElement('div');
        enrolledCourseContainer.classList.add('Progress_bar');

        const courseDetails = [
            { name: 'HTML', imgSrc: '/DCKAP_LMS_Project/Assests/html.webp' },
            { name: 'CSS', imgSrc: '/DCKAP_LMS_Project/Assests/css.webp' },
            { name: 'JavaScript', imgSrc: '/DCKAP_LMS_Project/Assests/js.webp' },
            { name: 'MySQL', imgSrc: '/DCKAP_LMS_Project/Assests/7723d1592a0b454cb59a32cf5ab35642-SQL2.webp' },
            { name:'PHP', imgSrc:'/DCKAP_LMS_Project/Assests/php.webp'}
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

        const enrolledCoursesContainer = document.querySelector('.progressing_bar .Progress_container');
        enrolledCoursesContainer.appendChild(enrolledCourseContainer);

        // Save data to Firestore
        await addDoc(collection(database, "enrolledCourses"), {
            name: courseDetails[index].name,
            imgSrc: courseDetails[index].imgSrc
        });

    } catch (error) {
        console.error('Error:', error.message);
    }

    enrolledCourses.push(index); 

    const enrolledCourseContainer = document.createElement("div");
    enrolledCourseContainer.classList.add("Progress_bar");

    const courseDetails = [
      { name: "HTML", imgSrc: "./Assests/html.webp" },
      { name: "CSS", imgSrc: "./Assests/css.webp" },
      { name: "JavaScript", imgSrc: "./Assests/js.webp" },
      { name: "MySQL", imgSrc: "./Assests/7723d1592a0b454cb59a32cf5ab35642-SQL2.webp" },
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

    const enrolledCoursesContainer = document.querySelector(".progressing_bar .Progress_container");
    enrolledCoursesContainer.appendChild(enrolledCourseContainer);

    // Save data to Firestore
    await addDoc(collection(database, "enrolledCourses"), {
      name: courseDetails[index].name,
      imgSrc: courseDetails[index].imgSrc,
    });
  } )

// Retrieve data from Firestore on page load
window.addEventListener('load', async function() {
    try {
        const querySnapshot = await getDocs(collection(database, "enrolledCourses"));
        querySnapshot.forEach(doc => {
            const enrolledCourseContainer = document.createElement('div');
            enrolledCourseContainer.classList.add('Progress_bar');

            enrolledCourseContainer.innerHTML = `
                <div class="progress_language">
                    <img src="${doc.data().imgSrc}" alt="" class="enroll_img">
                </div>
                <hr>
                <div class="progress_status">
                    <p class="enroll_language">${doc.data().name}</p>
                    <div class="percentage">
                        <p class="progress">In progress</p>
                        <span></span>
                    </div>
                </div>
            `;

            const enrolledCoursesContainer = document.querySelector('.progressing_bar .Progress_container');
            enrolledCoursesContainer.appendChild(enrolledCourseContainer);
        });
    } catch (error) {
        console.error('Error:', error.message);
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
                        <span></span>
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
const darkLight = document.getElementById("darkLight");
const body = document.body;
const searchIcon = document.querySelector(".fas");
const headings = document.querySelectorAll("#headings");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

let Dckaplogo = document.querySelector(".DCKAPlOGO");

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

let searchicon = document.querySelector(".fas");
console.log(searchicon);

darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  searchIcon.style.color = body.classList.contains("dark") ? "white" : "black";
  headings.forEach((heading) => {
    heading.style.color = body.classList.contains("dark") ? "white" : "black";
  });
  Dckaplogo.src = body.classList.contains("dark")
    ? "../Assests/Dckapwhite.png"
    : "../Assests/Dckap Logo.png";
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

let Course_navigate=document.querySelector(".Course_Down")
Course_navigate.addEventListener("click",()=>{
      window.location.href="./Courses.html"
})


let Certi_page=document.querySelector(".profile-certicate");

Certi_page.addEventListener("click",()=>{
         window.location.href="./certificate.html"
})




let left_side_bar=document.querySelectorAll(".navlink");

left_side_bar[0].addEventListener("click",()=>{
  window.location.href='./index.html  '
});

left_side_bar[1].addEventListener("click",()=>{

  window.location.href='./Learning.html  '
});
left_side_bar[2].addEventListener("click",()=>{

  window.location.href='./dashboard.html';
});
left_side_bar[3].addEventListener("click",()=>{

  window.location.href='./Roadmap.html';
});


