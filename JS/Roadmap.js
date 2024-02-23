const body = document.querySelector("body");

const darkLight = document.querySelector("#darkLight");

const sidebar = document.querySelector(".sidebar");

const submenuItems = document.querySelectorAll(".submenu_item");

const sidebarOpen = document.querySelector("#sidebarOpen");

const sidebarClose = document.querySelector(".collapse_sidebar");

const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));


let content=document.querySelector(".menu_content")

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
    content.style.left = "0rem"; // Adjust the left position when sidebar is closed and not hovered
  }
});



let Dckaplogo = document.querySelector(".DCKAPlOGO");


let searchicon = document.querySelector(".fas");

darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  searchicon.style.color = body.classList.contains("dark") ? "white" : "black";
  headings.forEach((heading) => {
    heading.style.color = body.classList.contains("dark") ? "white" : "black";
  });
  Dckaplogo.src = body.classList.contains("dark")
    ? "./Assests/Dckapwhite.png"
    : "./Assests/Dckap Logo.png";
});

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
        window.location.href="././profile.html"
})

let Course_navigate=document.querySelector(".Course_Down")
Course_navigate.addEventListener("click",()=>{
      window.location.href="./Courses.html"
})