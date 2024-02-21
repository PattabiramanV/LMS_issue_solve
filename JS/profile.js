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
  if (
    !profile_navigate.contains(event.target) &&
    !profile_Dropdown.contains(event.target)
  ) {
    profile_Dropdown.style.display = "none";
  }
});

let Cancel_btn=document.querySelector(".cancel_btn")

Cancel_btn.addEventListener("click", () => {
    window.location.href="Roadmap.html";
});

// profile_drop

let profile_page = document.querySelector(".profile_down");
profile_page.addEventListener("click", () => {
  window.location.href = "profile.html";
});

let Course_navigate = document.querySelector(".Course_Down");
Course_navigate.addEventListener("click", () => {
  window.location.href = "Courses.html";
});

// Firebase store Name
window.addEventListener("DOMContentLoaded", async (event) => {
  try {
    const NameRef = collection(database, "user_Name_Information");
    const querySnapshot = await getDocs(NameRef);
    querySnapshot.forEach((doc) => {
      const NameData = doc.data();
      const nameSpan = document.getElementById("fullName");
      nameSpan.textContent = NameData.name;
    });
    console.log("Name data fetched from Firebase");
  } catch (error) {
    console.error("Error fetching Name data from Firebase: ", error);
  }
});

let inputName = document.querySelector(".editbtnName");
inputName.addEventListener("click", () => {
  var nameSpan = document.getElementById("fullName");
  var nameInput = document.getElementById("fullNameInput");
  var editButton = document.querySelector(".editbtnName");

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

  SaveNametofirebase(nameSpan.textContent);
});

async function SaveNametofirebase(name) {
  try {
    const NameRef = collection(database, "user_Name_Information");
    await addDoc(NameRef, {
      name: name,
    });
    console.log("Bio saved to Firebase");
  } catch (error) {
    console.error("Error saving bio to Firebase: ", error);
  }
}

// Firebase store Bio
window.addEventListener("DOMContentLoaded", async (event) => {
  try {
    const bioRef = collection(database, "user_Bio_Information");
    const querySnapshot = await getDocs(bioRef);
    querySnapshot.forEach((doc) => {
      const bioData = doc.data();
      const bioSpan = document.getElementById("bioInfo");
      bioSpan.textContent = bioData.bio;
    });
    console.log("Bio data fetched from Firebase");
  } catch (error) {
    console.error("Error fetching bio data from Firebase: ", error);
  }
});

let boedit = document.querySelector(".editbtnn");
boedit.addEventListener("click", () => {
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

    // Save bio to Firebase
    saveBioToFirebase(bioSpan.textContent);
  }
});

async function saveBioToFirebase(bio) {
  try {
    const bioRef = collection(database, "user_Bio_Information");
    await addDoc(bioRef, {
      bio: bio,
    });
    console.log("Bio saved to Firebase");
  } catch (error) {
    console.error("Error saving bio to Firebase: ", error);
  }
}

// Firebase store Githubname
window.addEventListener("DOMContentLoaded", async (event) => {
  try {
    const gitnameRef = collection(database, "user_Git_Name_Information");
    const querySnapshot = await getDocs(gitnameRef);
    querySnapshot.forEach((doc) => {
      const gitnameData = doc.data();
      const gitSpan = document.getElementById("gitadd");
      gitSpan.textContent = gitnameData.gitname;
    });
    console.log("gitname data fetched from Firebase");
  } catch (error) {
    console.error("Error fetching gitname data from Firebase: ", error);
  }
});

let inputGitHub = document.querySelector(".editbtngit");
inputGitHub.addEventListener("click", function (e) {
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
  SaveGitnameInFirebase(gitSpan.textContent);
});

async function SaveGitnameInFirebase(gitname) {
  try {
    const GitRef = collection(database, "user_Git_Name_Information");
    await addDoc(GitRef, {
      gitname: gitname,
    });
    console.log("Gitname saved to Firebase");
  } catch (error) {
    console.error("Error saving Gitname to Firebase: ", error);
  }
}


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
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

const uploadButton = document.getElementById("uploadButton");
const uploadInput = document.getElementById("uploadInput");
const imageContainer = document.getElementById("imageContainer");

uploadButton.addEventListener("click", function () {
  uploadInput.click();
});

uploadInput.addEventListener("change", async function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = async function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      imageContainer.innerHTML = "";
      imageContainer.appendChild(img);

      try {
        // Store the image URL in Firestore
        const imagesRef = collection(database, "images");
        await addDoc(imagesRef, {
          imageURL: e.target.result, // Store the URL of the image
        });

        // Also, store additional data along with the image
        const profileImgRef = collection(database, "Profile_Img_Store");
        await addDoc(profileImgRef, {
          Find_Language_type: find_language, // Assuming find_language is defined elsewhere
          imageURL: e.target.result, // Store the URL of the image
        });

        alert("Successfully uploaded image and data.");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    };
    reader.readAsDataURL(file);
  }
});


let left_side_bar=document.querySelectorAll(".navlink");

left_side_bar[0].addEventListener("click",()=>{
  window.location.href='index.html  '
});

left_side_bar[1].addEventListener("click",()=>{
  window.location.href='Learning.html'
});
left_side_bar[2].addEventListener("click",()=>{

  window.location.href='Dashboard.html';
});
left_side_bar[3].addEventListener("click",()=>{

  window.location.href='Roadmap.html';
});


