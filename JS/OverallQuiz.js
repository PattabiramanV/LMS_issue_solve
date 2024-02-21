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

// Quiz_page



// Import the functions you need from the SDKs you need
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

async function fetchQuizData() {
  try {
    let quizDataCollection = collection(db, 'Quiz');
    let quizDataSnapshot = await getDocs(quizDataCollection);
    
    return quizDataSnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    return [];
  }
}

async function initializeQuiz() {


  let cssquizData = await fetchQuizData();
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

// session storage set_up

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



// it is use to display_a_question

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


// it is use to check_answer

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
        if (score === cssquizData.length) {
          let submitButton = document.createElement('button');
          submitButton.textContent = 'certificate';
          retryButton.style.display = 'none';
          retryButton2.style.display = 'none';
          showAnswerButton.style.display = 'none';
          submitButton.addEventListener('click', function() {
            console.log('Submit button clicked');
          });
          let certificate_button = document.querySelector('.butlist');
          certificate_button.appendChild(submitButton);
        }
      }

      // score = cssquizData.length - incorrectAnswers.length;
      score = Math.max(cssquizData.length - incorrectAnswers.length, 0);
      saveQuizState();
    }
  }

// it is use to goback button 

  function goBack() {
    if (currentQuestion > 0) {
      if (cssquizData[currentQuestion - 1].answer === cssquizData[currentQuestion - 1].options.find(option => option === cssquizData[currentQuestion - 1].answer)) {
        score--;
      }
      currentQuestion--;
      sessionStorage.setItem('currentQuestion', currentQuestion);
      sessionStorage.setItem('score', score);
      displayQuestion();
    }
  }


  
// it is use to show_the_answer 

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
      <p>You scored ${score} out of ${cssquizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
    
  }




// it use display the resut of Score and button

  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    backButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    marks.style.display = "block";
    marks.textContent = `You scored ${score} out of ${cssquizData.length}!`;
  }

// it is retry_quiz

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



  retrieveQuizState();

  submitButton.addEventListener('click', checkAnswer);
  backButton.addEventListener('click', goBack);
  retryButton.addEventListener('click', retryQuiz);
  retryButton2.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);

  displayQuestion();
}

initializeQuiz();





