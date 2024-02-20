
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



// Your content paste here



function toggleNameEdit() {
  var nameSpan = document.getElementById("fullName");
  var nameInput = document.getElementById("fullNameInput");
  var editButton = document.querySelector(".editbtn");

  if (nameSpan.style.display !== "none") {
    nameInput.value = nameSpan.textContent;
    nameSpan.style.display = "none";
    nameInput.style.display = "inline-block";
    editButton.textContent = "Save";
  } else {
    nameSpan.textContent = nameInput.value;
    nameInput.style.display = "none";
    nameSpan.style.display = "inline-block";
    editButton.textContent = "Edit";
  }
}

function toggleBioEdit() {
  var bioSpan = document.getElementById("bioInfo");
  var bioInput = document.getElementById("bioInput");
  var editButton = document.querySelector(".editbtnn");

  if (bioSpan.style.display !== "none") {
    bioInput.value = bioSpan.textContent;
    bioSpan.style.display = "none";
    bioInput.style.display = "inline-block";
    editButton.textContent = "Save";
  } else {
    bioSpan.textContent = bioInput.value;
    bioInput.style.display = "none";
    bioSpan.style.display = "inline-block";
    editButton.textContent = "Edit";
  }
}

function showGitUsername() {
  var gitSpan = document.getElementById("gitadd");
  var gitinput = document.getElementById("gitinput");
  var giteditbtn = document.querySelector(".editbtngit");

  if (gitSpan.style.display !== "none") {
    gitinput.value = gitSpan.textContent;
    gitSpan.style.display = "none";
    gitinput.style.display = "inline-block";
    giteditbtn.textContent = "Save";
  } else {
    gitSpan.textContent = gitinput.value;
    gitinput.style.display = "none";
    gitSpan.style.display = "inline-block";
    giteditbtn.textContent = "Edit";
  }
}

// Navigate to home page
let cancel_navigate = document.querySelector(".cancel_btn");
cancel_navigate.addEventListener("click", () => {
  window.location.href = "profile.html";
});



// Upload Img Code.
const uploadButton = document.getElementById("uploadButton");
const uploadInput = document.getElementById("uploadInput");
const imageContainer = document.getElementById("imageContainer");

uploadButton.addEventListener("click", function () {
  uploadInput.click();
});

uploadInput.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      imageContainer.innerHTML = "";
      imageContainer.appendChild(img);
    };

    reader.readAsDataURL(file);
  }
});