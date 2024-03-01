const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
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

let searchicon = document.querySelector(".fas");
let Dckaplogo = document.querySelector(".DCKAPlOGO");

// Function to toggle dark mode

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

// Cancel Btn

let cancel_btn = document.querySelector(".cancel_btn");
cancel_btn.addEventListener("click", (e) => {
  let previousLocation = localStorage.getItem("previous_location");
  if (previousLocation) {
    window.location.href = previousLocation;
  } else {
    window.location.href = "./index.html";
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
  windnameow.location.href = "./login.html";
});

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

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
// Add event listener to the edit button for
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
    SaveNametofirebase(nameSpan.textContent);
  }
});

// Function to save the name to Firebase
async function SaveNametofirebase(name) {
  try {
    const NameRef = collection(database, "user_Name_Information");
    await addDoc(NameRef, {
      name: name,
    });
    console.log("Name saved to Firebase");
  } catch (error) {
    console.error("Error saving name to Firebase: ", error);
  }
}

// Load before executing JavaScript
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

  var userDetailsString = localStorage.getItem("userdetails");

var userDetails = JSON.parse(userDetailsString);

var storedEmail = userDetails.email;
var storedUsername = userDetails.username;

var emailInput = document.getElementById("emailadd");
var nameSpan = document.getElementById("fullName");

emailInput.value = storedEmail;

if (storedUsername) {
  nameSpan.innerHTML = storedUsername;
} else {
  nameSpan.innerHTML = "Guest";
}

});

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

// Email fetch local storage

var userDetailsString = localStorage.getItem("userdetails");

var userDetails = JSON.parse(userDetailsString);

var storedEmail = userDetails.email;
var storedUsername = userDetails.username;

var emailInput = document.getElementById("emailadd");
var nameSpan = document.getElementById("fullName");

emailInput.value = storedEmail;

if (storedUsername) {
  nameSpan.innerHTML = storedUsername;
} else {
  nameSpan.innerHTML = "Guest";
}


// Git hu addevent
window.addEventListener("DOMContentLoaded", async (event) => {
  try {
    const gitnameRef = collection(database, "user_Git_Name_Information");
    const querySnapshot = await getDocs(gitnameRef);
    querySnapshot.forEach((doc) => {
      const gitnameData = doc.data();
      const gitSpan = document.getElementById("gitadd");
      gitSpan.textContent = gitnameData.gitname;
    });

    console.log("GitHub name data fetched from Firebase");
  } catch (error) {
    console.error("Error fetching GitHub name data from Firebase: ", error);
  }
});

// Add event listener to the element with the class "editbtngit"
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

    SaveGitnameInFirebase(gitSpan.textContent);
  }
});

async function SaveGitnameInFirebase(gitname) {
  try {
    const GitRef = collection(database, "user_Git_Name_Information");
    await addDoc(GitRef, {
      gitname: gitname,
    });

    console.log("GitHub name saved to Firebase");
  } catch (error) {
    console.error("Error saving GitHub name to Firebase: ", error);
  }
}

// linked in information
window.addEventListener("DOMContentLoaded", async (event) => {
  try {
    const linkedInRef = collection(database, "user_LinkedIn_Information");
    const querySnapshot = await getDocs(linkedInRef);

    querySnapshot.forEach((doc) => {
      const linkedInData = doc.data();
      const linkedInSpan = document.getElementById("linked_info");
      linkedInSpan.textContent = linkedInData.linkedin;
    });

    console.log("LinkedIn data fetched from Firebase");
  } catch (error) {
    console.error("Error fetching LinkedIn data from Firebase: ", error);
  }
});

let linkedInEditButton = document.querySelector(".editbtnlink");
linkedInEditButton.addEventListener("click", () => {
  var linkedInSpan = document.getElementById("linked_info");
  var linkedInInput = document.getElementById("linkedInInput");
  var editButton = document.querySelector(".editbtnlink");

  if (linkedInSpan.style.display !== "none") {
    linkedInInput.value = linkedInSpan.textContent;
    linkedInSpan.style.display = "none";
    linkedInInput.style.display = "inline-block";
    editButton.textContent = "Save";
  } else {
    linkedInSpan.textContent = linkedInInput.value;
    linkedInInput.style.display = "none";
    linkedInSpan.style.display = "inline-block";
    editButton.textContent = "Edit";

    // Save the updated LinkedIn info to Firebase
    saveLinkedInToFirebase(linkedInSpan.textContent);
  }
});

async function saveLinkedInToFirebase(linkedIn) {
  try {
    const linkedInRef = collection(database, "user_LinkedIn_Information");
    await addDoc(linkedInRef, {
      linkedin: linkedIn,
    });

    console.log("LinkedIn info saved to Firebase");
  } catch (error) {
    console.error("Error saving LinkedIn info to Firebase: ", error);
  }
}

const uploadButton = document.getElementById("uploadButton");
uploadButton.addEventListener("click", function () {
  fileInput.click();
});

const fileInput = document.getElementById("uploadInput");
const imageContainer = document.getElementById("imageContainer");
let previousImageDocId = null;

fileInput.addEventListener("change", async function (event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = async function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;

      const profileImg = document.querySelector(".profile");
      profileImg.src = e.target.result;

      while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
      }
      imageContainer.appendChild(img);

      try {
        const imagesRef = collection(database, "images");
        if (previousImageDocId) {
          await deleteDoc(doc(database, "images", previousImageDocId));
        }
        const newImageDocRef = await addDoc(imagesRef, {
          imageURL: e.target.result,
        });
        previousImageDocId = newImageDocRef.id;
        alert("Successfully uploaded image and data.");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    };

    reader.readAsDataURL(file);
  }
});

// window.addEventListener("load", async () => {
//   const imagesRef = collection(database, "images");
//   const imageContainer = document.getElementById('imageContainer');
//   const profileImg = document.querySelector(".profile");

//   try {
//     const querySnapshot = await getDocs(imagesRef);
//     imageContainer.innerHTML = '';

//     querySnapshot.forEach((doc) => {
//       const data = doc.data();
//       const img = document.createElement("img");
//       img.src = data.imageURL;

//       imageContainer.appendChild(img);
//       previousImageDocId = doc.id;
//     });

//     if (querySnapshot.docs.length > 0) {
//       const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
//       const lastImageURL = lastDoc.data().imageURL;
//       profileImg.src = lastImageURL; // Set the profile image to the last uploaded image
//     }
//   } catch (error) {
//     console.error("Error getting documents: ", error);
//   }
// });