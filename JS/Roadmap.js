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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

const body = document.querySelector("body");

const darkLight = document.querySelector("#darkLight");

const sidebar = document.querySelector(".sidebar");

const submenuItems = document.querySelectorAll(".submenu_item");

const sidebarOpen = document.querySelector("#sidebarOpen");

const sidebarClose = document.querySelector(".collapse_sidebar");

const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

let Navlink = document.querySelector(".nav_link");

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
let searchicon = document.querySelector(".fas");

// Function to toggle dark mode

function toggleDarkMode() {
  const isDarkMode = body.classList.toggle("dark");
  document.body.classList.toggle("dark-mode");
  searchicon.style.color = isDarkMode ? "white" : "black";
  headings.forEach((heading) => {
      if (isDarkMode) {
          heading.style.color = "white";
      } else {
          heading.style.color = "#b95233";
      }
  Dckaplogo.src = body.classList.contains("dark")
  ? "./Assests/Dckapwhite.png"
  : "./Assests/Logodk.png";
  });

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
  window.location.href = "./login.html";
});

// Navigating into learning page

let headingnavigate = document.querySelectorAll(".Heading_p");
console.log(headingnavigate);

headingnavigate.forEach(async (links) => {
  let ref = doc(database, "Learning", "0");
  let get_data = await getDoc(ref);
  let find_language = 0;

  links.addEventListener("click", async () => {
    if (links == headingnavigate[1]) {
      find_language = "Html";
    } else if (links == headingnavigate[2]) {
      find_language = "Css";
    }
    await updateDoc(ref, {
      Find_Language_type: find_language,
    });
    window.location.href = "./learning_content.html";
  });
});

// Import Firebase modules
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// // Your Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDB-XQdiHjT82q_r5MVNFgpyUsaU2WMvik",
//     authDomain: "dckap-lms-project.firebaseapp.com",
//     projectId: "dckap-lms-project",
//     storageBucket: "dckap-lms-project.appspot.com",
//     messagingSenderId: "1022626638467",
//     appId: "1:1022626638467:web:2c8f79d5614281ac7b49b6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app); // Corrected: getFirestore

// // Function to save checkbox state to Firebase
// async function saveCheckboxState(id, checked) {
//     try {
//         await addDoc(collection(db, "checkboxes"), { id, checked }); // Corrected: addDoc and collection
//         console.log("Checkbox state saved successfully!");
//     } catch (error) {
//         console.error("Error saving checkbox state: ", error);
//     }
// }

// // Function to retrieve checkbox state from Firebase
// async function getCheckboxState(id) {
//   try {
//       const querySnapshot = await getDocs(collection(db, "checkboxes")); // Query the collection
//       querySnapshot.forEach(doc => {
//           if (doc.id === id) {
//               return doc.data().checked; // Return the value of 'checked' field from the document
//           }
//       });
//       return false; // Return false if the document with the given ID is not found
//   } catch (error) {
//       console.error("Error getting checkbox state: ", error);
//       return false;
//   }
// }

// // Add event listeners to checkboxes
// window.addEventListener('load', async function() {
//   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//   checkboxes.forEach(async function(checkbox) {
//       const id = checkbox.id;
//       const isChecked = await getCheckboxState(id); // Retrieve checkbox state from Firebase
//       checkbox.checked = isChecked; // Set checkbox state based on Firebase data

//       // Add event listener for checkbox click
//       checkbox.addEventListener('click', function() {
//           saveCheckboxState(id, checkbox.checked); // Save checkbox state to Firebase on click
//       });

//   });
// });
