"use strict"

// //   // Import the functions you need from the SDKs you need
// //   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// //   // TODO: Add SDKs for Firebase products that you want to use
// //   // https://firebase.google.com/docs/web/setup#available-libraries

// //   // Your web app's Firebase configuration
// //   const firebaseConfig = {
// //     apiKey: "AIzaSyDB-XQdiHjT82q_r5MVNFgpyUsaU2WMvik",
// //     authDomain: "dckap-lms-project.firebaseapp.com",
// //     projectId: "dckap-lms-project",
// //     storageBucket: "dckap-lms-project.appspot.com",
// //     messagingSenderId: "1022626638467",
// //     appId: "1:1022626638467:web:2c8f79d5614281ac7b49b6"
// //   };

// //   // Initialize Firebase
// //   const app = initializeApp(firebaseConfig);

// //   import {  getFirestore, getDoc, getDocs, doc, setDoc, updateDoc, addDoc,  collection  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


// // Import the functions you need from the Firebase SDKs
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// import { getFirestore, collection, addDoc,setDoc,doc,getDoc,getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// // Your web app's Firebase configuration
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

// // Get a reference to the Firestore database service
// const db = getFirestore(app);
// let id=0;
// // Define the cssquizData array
// let cssquizData = [
//     {
//         question: '1.What does CSS stand for?',
//         options: [    
//             'Creative Style Sheets',
//             'Computer Style Sheets',
//             'Cascading Style Sheets',
//             'Colorful Style Sheets',
//         ],
//         answer: 'Cascading Style Sheets'
//     },
//     {
//         question: '2.Which property is used to change the text color of an element?',
//         options: [
//             'color',
//             'text-color',
//             'font-color',
//             'text-style',
//         ],
//         answer: 'color'
//     },
//     // Add other quiz data objects here...
// ];

// // Function to store quiz data in Firestore
// // function storeDataInFirestore() {
// //     cssquizData.forEach((quiz, index) => {
// //         setDoc(collection(db, "cssQuizzes",`${id++}`))
// //         .then((docRef) => {
// //             console.log("Document written with ID: ", docRef.id);
// //         })
// //         .catch((error) => {
// //             console.error("Error adding document: ", error);
// //         });
// //     });
// // }

// // Call the function to store quiz data
// // storeDataInFirestore();

// let get_size=collection(db,'Quiz');
// let set_size= await getDocs(get_size);
// console.log(set_size.size);
// id=set_size.size;
// // console.log(get_size.size)


// --------------------------------------------------------------------



// let id = 1;

// (async () => {
//     try {
//         let ref = doc(db, "cssquizData", `${id++}`);
//         let dataReference = await setDoc(ref, { id: ref.id }); // Using ref.id to access the ID
//         console.log("Data Added Successfully");
//     } catch (err) {
//         console.log(err);
//     }
// })();


// function storeDataInFirestore() {
//     cssquizData.forEach((quiz, index) => {
//         addDoc(collection(db, "cssQuizzes"), quiz)
//         .then((docRef) => {
//             console.log("Document written with ID: ", docRef.id);
//         })
//         .catch((error) => {
//             console.error("Error adding document: ", error);
//         });
//     });
// }

// storeDataInFirestore();


//----------------------------------- navbar_sidebar




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

darkLight.addEventListener("click",() => {
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


    // // ---------------------Quiz----------------------------------


// Import the functions you need from the SDKs you need/
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

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

// Import necessary Firebase Firestore functions
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Create a Firestore instance
const db = getFirestore();

// Function to fetch quiz data from Firestore
async function fetchQuizData() {
  try {
    const quizDataCollection = collection(db, 'Quiz'); // Assuming your collection is named 'Quiz'
    const quizDataSnapshot = await getDocs(quizDataCollection);
    
    const quizData = [];
    quizDataSnapshot.forEach(doc => {
      quizData.push(doc.data()); // Assuming each document contains quiz data
    });

    return quizData;
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    return []; // Return an empty array in case of error
  }
}

// Use the fetched quiz data to populate your quiz application

async function initializeQuiz() {
  const cssquizData = await fetchQuizData();
  console.log('Fetched Quiz Data:', cssquizData);

let quizContainer = document.getElementById('quiz');
let resultContainer = document.getElementById('result');
let submitButton = document.getElementById('submit');
let backButton = document.getElementById('submit_btn');
let retryButton = document.getElementById('retry');
let retryButton2 = document.getElementById('retry2');
let showAnswerButton = document.getElementById('showAnswer');

let div_get = document.getElementById('diva');
let marks = document.createElement("p");
marks.className = "marks";
div_get.appendChild(marks);

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

// Function to save quiz state to session storage
function saveQuizState() {
  sessionStorage.setItem('currentQuestion', currentQuestion);
  sessionStorage.setItem('score', score);
  sessionStorage.setItem('incorrectAnswers', JSON.stringify(incorrectAnswers));
}

// Function to retrieve quiz state from session storage
function retrieveQuizState() {
  const storedQuestion = sessionStorage.getItem('currentQuestion');
  const storedScore = sessionStorage.getItem('score');
  const storedIncorrectAnswers = JSON.parse(sessionStorage.getItem('incorrectAnswers'));

  if (storedQuestion !== null && storedScore !== null && storedIncorrectAnswers !== null) {
    currentQuestion = parseInt(storedQuestion);
    score = parseInt(storedScore);
    incorrectAnswers = storedIncorrectAnswers;
  }
}

// Function to clear quiz state from session storage
function clearQuizState() {
  sessionStorage.removeItem('currentQuestion');
  sessionStorage.removeItem('score');
  sessionStorage.removeItem('incorrectAnswers');
}

function displayQuestion() {
  let questionData = cssquizData[currentQuestion];

  let questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  let optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  for (let i = 0; i < questionData.options.length; i++) {
    let option = document.createElement('label');
    option.className = 'option';

    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = questionData.options[i];

    // Check if the current option was previously selected

  let wasIncorrectlySelected = incorrectAnswers.some(answer => {
      return answer.question === questionData.question && answer.incorrectAnswer === questionData.options[i];
    });
  
    if (wasIncorrectlySelected) {
      radio.checked = true;
    }

    let optionText = document.createTextNode(questionData.options[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);

  // Show back button after first question
  if (currentQuestion > 0) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
}


function checkAnswer() {
  let selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    let answer = selectedOption.value;
    if (answer === cssquizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: cssquizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: cssquizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < cssquizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
    // Save quiz state to session storage
    saveQuizState();
  }
}

function goBack() {
  if (currentQuestion > 0) {
    currentQuestion--;
    // Save current question index to session storage when going back
    sessionStorage.setItem('currentQuestion', currentQuestion);
    displayQuestion();
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  backButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  marks.style.display="block";
  marks.innerHTML = `You scored ${score} out of ${cssquizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];



  // Clear quiz state from session storage
  clearQuizState();
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  backButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  retryButton2.style.display = 'none';
  showAnswerButton.style.display = 'none';
  marks.style.display="none";
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  backButton.style.display = 'none';
  retryButton2.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  marks.style.display="none";

  let displayedIncorrectAnswers = []; // Array to store displayed incorrect answers
  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    // Check if the current incorrect answer has not been displayed before
    if (!displayedIncorrectAnswers.includes(incorrectAnswers[i].question)) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
      displayedIncorrectAnswers.push(incorrectAnswers[i].question); // Add the question to the displayed list
    }
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${cssquizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

// Retrieve quiz state from session storage
retrieveQuizState();

submitButton.addEventListener('click', checkAnswer);
backButton.addEventListener('click', goBack);
retryButton.addEventListener('click', retryQuiz);
retryButton2.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();
}
// Call initializeQuiz() to start the quiz after fetching quiz data
initializeQuiz();
