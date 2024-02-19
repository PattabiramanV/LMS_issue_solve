"use strict"

//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyDB-XQdiHjT82q_r5MVNFgpyUsaU2WMvik",
//     authDomain: "dckap-lms-project.firebaseapp.com",
//     projectId: "dckap-lms-project",
//     storageBucket: "dckap-lms-project.appspot.com",
//     messagingSenderId: "1022626638467",
//     appId: "1:1022626638467:web:2c8f79d5614281ac7b49b6"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   import {  getFirestore, getDoc, getDocs, doc, setDoc, updateDoc, addDoc,  collection  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";



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


















// // ---------------------Quiz----------------------------------
let cssquizData = [
    {
        question: '1.What does CSS stand for?',
        options: [    
            'Creative Style Sheets',
            'Computer Style Sheets',
            'Cascading Style Sheets',
            'Colorful Style Sheets',
        ],
        answer: 'Cascading Style Sheets'
    },
    {
        question: '2.Which property is used to change the text color of an element?',
        options: [
            'color',
            'text-color',
            'font-color',
            'text-style',
        ],
        answer: 'color'
    },
    {
        question: '3.What is the correct CSS syntax to select an element by its id?',
        options: [
            '#elementID {}',
            '.elementID {}',
            'elementID {}',
            '<elementID> {}',
        ],
        answer: '#elementID {}'
    },
    {
        question: '4.Which CSS property is used to control the spacing between elements?',
        options: [
            'margin',
            'padding',
            'spacing',
            'gap',
        ],
        answer: 'margin'
    },
    {
        question: '5.Which CSS property is used to make text bold?',
        options: [
            'text-weight',
            'font-weight',
            'bold',
            'text-bold',
        ],
        answer: 'font-weight'
    },
    {
        question: '6.What does the "float" property in CSS do?',
        options: [
            'It makes an element float to the left',
            'It makes an element float to the right',
            'It clears the floated elements',
            'It has no effect on elements',
        ],
        answer: 'It makes an element float to the left'
    },
    {
        question: '7.Which CSS property is used to create rounded corners?',
        options: [
            'corner-radius',
            'border-radius',
            'rounded-corners',
            'corner-style',
        ],
        answer: 'border-radius'
    },
    {
        question: '8.What does the "display: none;" CSS property do?',
        options: [
            'It hides an element',
            'It shows an element',
            'It changes the element\'s display to inline-block',
            'It has no effect on elements',
        ],
        answer: 'It hides an element'
    },
    {
        question: '9.Which CSS property is used to control the size of text?',
        options: [
            'text-size',
            'font-size',
            'size',
            'text-scale',
        ],
        answer: 'font-size'
    },
  ];
  
  
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
      }
      else{
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
      }
  }
  
  function goBack() {
      if (currentQuestion > 0) {
          currentQuestion--;
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
  
      let incorrectAnswersHtml = '';
      for (let i = 0; i < incorrectAnswers.length; i++) {
          incorrectAnswersHtml += `
              <p>
                  <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
                  <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
                  <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
              </p>
          `;
      }
  
      resultContainer.innerHTML = `
          <p>You scored ${score} out of ${cssquizData.length}!</p>
          <p>Incorrect Answers:</p>
          ${incorrectAnswersHtml}
      `;
  }
  
  
  submitButton.addEventListener('click', checkAnswer);
  backButton.addEventListener('click', goBack);
  retryButton.addEventListener('click', retryQuiz);
  retryButton2.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();
  