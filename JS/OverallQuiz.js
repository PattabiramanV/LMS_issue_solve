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
  if (
    !profile_navigate.contains(event.target) &&
    !profile_Dropdown.contains(event.target)
  ) {
    profile_Dropdown.style.display = "none";
  }
});

// let Cancel_btn=document.querySelector(".cancel_btn")

// Cancel_btn.addEventListener("click", () => {
//     window.location.href="Roadmap.html";
// });

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

// Quiz_page


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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
let db = getFirestore(); // Create a Firestore instance

async function fetchQuizData(databaseName) {
  try {
    let quizDataCollection = collection(db, databaseName);
    let quizDataSnapshot = await getDocs(quizDataCollection);
    return quizDataSnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error(`Error fetching ${databaseName} quiz data:`, error);
    return [];
  }
}

async function initializeQuiz() {
  let selectedQuiz = localStorage.getItem('selectedQuiz');
  let allQuizData;

  if (selectedQuiz === 'HTML_Overall_Quiz' || selectedQuiz === 'CSS_Overall_Quiz' ||
      selectedQuiz === 'JavaScript_Overall_Quiz' || selectedQuiz === 'PHP_Overall_Quiz' || selectedQuiz === 'MySql_Overall_Quiz' ) {
    allQuizData = await fetchQuizData(selectedQuiz);
  } else {
    console.error('Invalid or missing selectedQuiz in localStorage');
    return;
  }

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

  function saveQuizState() {
    sessionStorage.setItem('currentQuestion', currentQuestion);
    sessionStorage.setItem('score', score);
    sessionStorage.setItem('incorrectAnswers', JSON.stringify(incorrectAnswers));
  }

  function retrieveQuizState() {
    let storedQuestion = sessionStorage.getItem('currentQuestion');
    let storedScore = sessionStorage.getItem('score');
    let storedIncorrectAnswers = JSON.parse(sessionStorage.getItem('incorrectAnswers'));

    if (storedQuestion !== null && storedScore !== null && storedIncorrectAnswers !== null) {
      currentQuestion = parseInt(storedQuestion);
      score = parseInt(storedScore);
      incorrectAnswers = storedIncorrectAnswers;
    }
  }

  function clearQuizState() {
    sessionStorage.removeItem('currentQuestion');
    sessionStorage.removeItem('score');
    sessionStorage.removeItem('incorrectAnswers');
  }

  function displayQuestion() {
    let questionData = allQuizData[currentQuestion];
    let questionId = questionData.questionId;

    let questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = `Question ID: ${questionId} : ${questionData.question}`;

    let optionsElement = document.createElement('div');
    optionsElement.className = 'options';

    for (let i = 0; i < questionData.options.length; i++) {
      let option = document.createElement('label');
      option.className = 'option';

      let radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = questionData.options[i];

      radio.checked = false;
      for (let j = 0; j < incorrectAnswers.length; j++) {
        if (incorrectAnswers[j].question === questionData.question && incorrectAnswers[j].incorrectAnswer === questionData.options[i]) {
          radio.checked = true;
          break;
        }
      }

      let optionText = document.createTextNode(questionData.options[i]);

      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }

    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);

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
      if (answer === allQuizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: allQuizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: allQuizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      if (currentQuestion < allQuizData.length) {
        displayQuestion();
      } else {
        displayResult();
        if (score === allQuizData.length) {
          let submitButton = document.createElement('button');
          submitButton.textContent = 'certificate';
          retryButton.style.display = 'none';
          retryButton2.style.display = 'none';
          showAnswerButton.style.display = 'none';
          submitButton.addEventListener('click', function() {
            let generate_certificate = document.querySelector(".generating_certificate");
            generate_certificate.style.display = "block";
          });
          let certificate_button = document.querySelector('.butlist');
          certificate_button.appendChild(submitButton);
        }
      }
      score = Math.max(allQuizData.length - incorrectAnswers.length, 0);
      saveQuizState();
    }
  }

  function goBack() {
    if (currentQuestion > 0) {
      if (allQuizData[currentQuestion - 1].answer === allQuizData[currentQuestion - 1].options.find(option => option === allQuizData[currentQuestion - 1].answer)) {
        score--;
      }
      currentQuestion--;
      sessionStorage.setItem('currentQuestion', currentQuestion);
      sessionStorage.setItem('score', score);
      displayQuestion();
    }
  }

  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    backButton.style.display = 'none';
    retryButton2.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    marks.style.display="none";

    let displayedIncorrectAnswers = [];
    let incorrectAnswersHtml = '';

    for (let i = 0; i < incorrectAnswers.length; i++) {
      if (!displayedIncorrectAnswers.includes(incorrectAnswers[i].question)) {
        incorrectAnswersHtml += `
          <p>
            <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
            <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
            <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
          </p>
        `;
        displayedIncorrectAnswers.push(incorrectAnswers[i].question);
      }
    }
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${allQuizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }

  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
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

  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    backButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    marks.style.display = "block";
    score = Math.min(score, allQuizData.length);
    marks.textContent = `You scored ${score} out of ${allQuizData.length}!`;
  }

  retrieveQuizState();

  submitButton.addEventListener('click', checkAnswer);
  backButton.addEventListener('click', goBack);
  retryButton.addEventListener('click', retryQuiz);
  retryButton2.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);

  displayQuestion();
}

initializeQuiz();


// ------------------- Generate Certificate -----------------------
const canvas = document.getElementById("canva"); 
const ctx = canvas.getContext('2d');
const name_input = document.getElementById("name");
const downloadBtn = document.getElementById("download_btn");



const image = new Image()
image.src = "/Assets/CERTIFICATE.jpg";
image.className = "gen_cer"
image.onload = () => {
    drawImage()
}

function drawImage()
{
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    ctx.font = '30px HK Grotesk'
    ctx.fillStyle = '#070F2B'
    ctx.fillText(name_input.value, 142, 191)
}


name_input.addEventListener("input", () => {
    // const name_value = name_input.value
    drawImage()
})


downloadBtn.addEventListener("click", () => {
    downloadBtn.href = canvas.toDataURL('image/jpg')
    downloadBtn.download = "Certificate"
})



