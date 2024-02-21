"use strict"

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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
});

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





// Nav bar
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

darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    document.setI;
    darkLight.classList.replace("bx-sun", "bx-moon");
  } else {
    darkLight.classList.replace("bx-moon", "bx-sun");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}




let profile_Dropdown = document.querySelector(".profile_bar_list");
let profile_navigate = document.querySelector(".profile");

profile_navigate.addEventListener("click", (event) => {
    event.stopPropagation();
    profile_Dropdown.style.display = "block";
});

document.addEventListener("click", (event) => {
    if (!profile_navigate.contains(event.target) && !profile_Dropdown.contains(event.target)) {
        profile_Dropdown.style.display = "none"; 
    }
});

// profile_drop

let profile_page=document.querySelector(".profile_down")
 profile_page.addEventListener("click",()=>{
        window.location.href="profile.html"
 })

// Course Drop

let Course_navigate=document.querySelector(".Course_Down")
Course_navigate.addEventListener("click",()=>{
      window.location.href="Courses.html"
})