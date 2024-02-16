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
console.log(all_learn_more_btn);

all_learn_more_btn[0].addEventListener("click",async()=>{

    let ref_data=collection(db,"Learning");
    let data_set=await addDoc(
        ref_data,{
            Find_Language_type:find_language
        }
    ).then(()=>{
        alert("sucessfully");
    }).catch((err)=>{
        console.log(err);
    });
    // window.location.href='/DCKAP_LMS/Learn_study_page/learning_content.html/';
})


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

// console.log(Quiz_object.CSS.Grid);