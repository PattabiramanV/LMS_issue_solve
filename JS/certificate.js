"use strict"

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
  let searchicon = document.querySelector(".fas");
  console.log(searchicon);
  let Dckaplogo = document.querySelector(".DCKAPlOGO");
  darkLight.addEventListener("click", () => {
    body.classList.toggle("dark");
    searchicon.style.color = body.classList.contains("dark") ? "white" : "black";
    headings.forEach((heading) => {
      heading.style.color = body.classList.contains("dark") ? "white" : "black";
    });
    Dckaplogo.src = body.classList.contains("dark")
    ? "../Assests/Dckapwhite.png"
    : "../Assests/Dckap Logo.png";
  });
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



// Profile

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
        window.location.href="/profile_user_page/profile.html"
})

let Course_navigate=document.querySelector(".Course_Down")
Course_navigate.addEventListener("click",()=>{
      window.location.href="/Profile_main_page/Courses.html"
})


// --------------- CSS Quiz -------------------

const html_btn =document.querySelector("#html_btn");
html_btn.addEventListener("click", () => {
  localStorage.setItem('selectedQuiz', 'HTML_Overall_Quiz');
  window.location.href = 'OverallQuiz.html';
});


const css_quiz = document.querySelector("#css_btn");
css_quiz.addEventListener("click", () => {
  // Store the selected quiz type in localStorage
  localStorage.setItem('selectedQuiz', 'CSS_Overall_Quiz');


  // console.log('CSS quiz button clicked');
  // console.log('selectedQuiz in localStorage:', localStorage.getItem('selectedQuiz'));
  window.location.href = 'OverallQuiz.html';

});

const js_btn =document.querySelector("#js_btn");
js_btn.addEventListener("click", () => {
  localStorage.setItem('selectedQuiz', 'JavaScript_Overall_Quiz');
  window.location.href = 'OverallQuiz.html';
});

const mysql_btn =document.querySelector("#mysql_btn");
mysql_btn.addEventListener("click", () => {
  localStorage.setItem('selectedQuiz', 'MySql_Overall_Quiz');
  window.location.href = 'OverallQuiz.html';
});