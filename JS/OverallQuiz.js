"use strict"
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



// async function fetchQuizData(databaseName) {
//   try {
//     let quizDataCollection = collection(db, databaseName);
//     let quizDataSnapshot = await getDocs(quizDataCollection);
//     let quizData = quizDataSnapshot.docs.map(doc => doc.data());
    
//     // Sorting the quiz data 
//     for (let i = 0; i < quizData.length - 1; i++) {
//       for (let j = i + 1; j < quizData.length; j++) {
//         if (parseInt(quizData[i].questionId) > parseInt(quizData[j].questionId)) {
//           let temp = quizData[i];
//           quizData[i] = quizData[j];
//           quizData[j] = temp;
//         }
//       }
//     }

//     return quizData;
//   } catch (error) {
//     console.error(`Error fetching ${databaseName} quiz data:`, error);
//     return [];
//   }
// }

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
    allQuizData.sort((a, b) => a.questionId - b.questionId);

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
    // questionElement.innerHTML = `Question ID: ${questionId} : ${questionData.question}`;
    questionElement.innerHTML = `Question No: ${questionId} : ${questionData.question.replace(/[""]/g, '')}`; // Removing double quotes

    let optionsElement = document.createElement('div');
    optionsElement.className = 'options';

    for (let i = 0; i < questionData.options.length; i++) {
      let option = document.createElement('label');
      option.className = 'option';

      let radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = questionData.options[i];
      // radio.value = questionData.options[i].replace(/[" "]/g, ''); // Removing double quotes


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
            <strong>Question No ${i + 1}:</strong> ${incorrectAnswers[i].question}<br>
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



// // Get the dark mode toggle button
// const darkModeToggle = document.getElementById('darkLight');

// Function to toggle between dark mode and light mode
function toggleDarkMode() {
  // Toggle dark mode class on body
  document.body.classList.toggle('dark-mode');
}

// Get the dark mode toggle button
const darkModeToggle = document.getElementById('darkLight');

// Add event listener to the dark mode toggle button
darkModeToggle.addEventListener('click', toggleDarkMode);





// ------------------- Generate Certificate -----------------------
const canvas = document.getElementById("canva"); 
const ctx = canvas.getContext('2d');
const name_input = document.getElementById("name");
const downloadBtn = document.getElementById("download_btn");



const image = new Image()
image.src = "/Assests/without_username_html_certificate.png";
image.className = "gen_cer"
image.onload = () => {
    drawImage()
}

function drawImage()
{
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    ctx.font = '30px HK Grotesk'
    ctx.fillStyle = '#070F2B'
    ctx.fillText(name_input.value, 40, 176);
}


name_input.addEventListener("input", () => {
    // const name_value = name_input.value
    drawImage()
})


downloadBtn.addEventListener("click", () => {
    downloadBtn.href = canvas.toDataURL('image/jpg')
    downloadBtn.download = "Certificate"
})



