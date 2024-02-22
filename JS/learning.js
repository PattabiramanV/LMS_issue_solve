"use strict"


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

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
  import { getFirestore,getDoc,getDocs,setDoc,updateDoc,doc,addDoc,collection,deleteDoc, deleteField } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

let db=getFirestore(app);
let find_language=0;



let all_learn_more_btn=document.querySelectorAll(".learn_more_btn");

all_learn_more_btn.forEach((btn,index)=>{

    btn.addEventListener("click",()=>{
if(index==0){
console.log("pattabi");
    window.location.href='learning_content.html';
}
    })
});

// all_learn_more_btn[0].addEventListener("click",async()=>{

//     let ref_data=collection(db,"Learning");
//     let data_set=await addDoc(
//         ref_data,{
//             Find_Language_type:find_language
//         }
//     ).then(()=>{
//         alert("sucessfully");
//     }).catch((err)=>{
//         console.log(err);
//     });
//     // window.location.href='/DCKAP_LMS/Learn_study_page/learning_content.html/';
// })


let Quiz_object={


HTML:{

    headers:[
    {
        Question:'1.What is Full form of HTML?',
        Options: ['Hyper Text Markup Language','Hyper Text Makeup Language',
        'Hyper Text Mark Language','Hyper Test Markup Language'],
        Answers:['Hyper Text Markup Language','<href>',
        'It defines a header for the document.','<table>','<body>']
    
    },

    {
        Question:'2.Which tag is used to create a hyperlink in HTML?',
        Options:['<link>','<a>','<href>','hyper']
     
    },
    {
        Question:`3.In HTML, what is the purpose of the &lt;head&gt; element?`,
        Options:['It contains the main content of the document.','It defines a header for the document.',
        'It provides metadata about the document.','It creates a navigation bar.' ]
 
    }
    ],

    form:[

        {
            Question:'1.What is Full form of HTML?',
            Options: ['Hyper Text Markup Language','Hyper Text Makeup Language',
            'Hyper Text Mark Language','Hyper Test Markup Language'],
            Answers:['Hyper Text Markup Language','<href>',
            'It defines a header for the document.','<table>','<body>']
        
        },
    
        {
            Question:'2.Which tag is used to create a hyperlink in HTML?',
            Options:['<link>','<a>','<href>','hyper']
         
        },
        {
            Question:`3.In HTML, what is the purpose of the &lt;head&gt; element?`,
            Options:['It contains the main content of the document.','It defines a header for the document.',
            'It provides metadata about the document.','It creates a navigation bar.' ]
     
        }
    ]
},

CSS:{

    felx:[
        {
            Question:'1.What is Full form of HTML?',
            Options: ['Hyper Text Markup Language','Hyper Text Makeup Language',
            'Hyper Text Mark Language','Hyper Test Markup Language'],
            Answers:['Hyper Text Markup Language','<href>',
            'It defines a header for the document.','<table>','<body>']
        
        },
    
        {
            Question:'2.Which tag is used to create a hyperlink in HTML?',
            Options:['<link>','<a>','<href>','hyper']
         
        },
        {
            Question:`3.In HTML, what is the purpose of the &lt;head&gt; element?`,
            Options:['It contains the main content of the document.','It defines a header for the document.',
            'It provides metadata about the document.','It creates a navigation bar.' ]
     
        }
        ],
    
        Grid:[
    
            {
                Question:'1.What is Full form of HTML?',
                Options: ['Hyper Text Markup Language','Hyper Text Makeup Language',
                'Hyper Text Mark Language','Hyper Test Markup Language'],
                Answers:['Hyper Text Markup Language','<href>',
                'It defines a header for the document.','<table>','<body>']
            
            },
        
            {
                Question:'2.Which tag is used to create a hyperlink in HTML?',
                Options:['<link>','<a>','<href>','hyper']
             
            },
            {
                Question:`3.In HTML, what is the purpose of the &lt;head&gt; element?`,
                Options:['It contains the main content of the document.','It defines a header for the document.',
                'It provides metadata about the document.','It creates a navigation bar.' ]
         
            }
        ]



}

}

























//................................. Nav bar...................................//


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
