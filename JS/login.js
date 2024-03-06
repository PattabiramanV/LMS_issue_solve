let backtosignup=document.getElementById("backto_signup")
backtosignup.addEventListener("click", signup_page);

function signup_page() {
    document.getElementById('loadingOverlay').style.visibility = 'visible';
    setTimeout(() => {
        window.location.href = './signup.html';
    }, 1000);
}

// ---------password icon--------
let log_email=document.getElementById("log")
let log_password=document.getElementById("log_pass")
let login_button=document.getElementById("login_btn")
let passEyeIcon = document.querySelector("#passIcon")

  passEyeIcon.addEventListener("click",()=>{
    if (log_password.type == "password") {
      log_password.type = "text"
      passEyeIcon.className = "fa-solid fa-eye"

    }
    else{
      log_password.type = "password"
      passEyeIcon.className = "fa-solid fa-eye-slash"
    }
  })



// -----login validation----

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


  import { getFirestore,getDocs,setDoc,doc,collection,getDoc,addDoc,updateDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


let db=getFirestore(app);
let getref=collection(db,"SignUp_details");
let getdata =await  getDocs(getref);
let id=getdata.size;
// let userdetails=JSON.parse(localStorage.getItem("userdetails"))
// console.log(userdetails);

login_button.addEventListener("click",login_fun)
 async function login_fun(event)

{ 
  // console.log("asha");
    let log_email_1=document.getElementById("log").value
    let log_password_1=document.getElementById("log_pass").value
    let invalid_mail=document.querySelector(".invalid_email")
    let invalid_password=document.querySelector(".invalid_password")
 
      event.preventDefault()
      
      if(log_email_1 == "")
      {
  
        invalid_mail.style.color = "red";
        invalid_mail.style.visibility="visible"
        setTimeout(() => {
          invalid_mail.style.visibility = "hidden";
        }, 2000);
         return;
      }
      if(log_password_1 == "")
      {
        invalid_password.style.color = "red";
        invalid_password.style.visibility="visible"
        setTimeout(() => {
          invalid_password.style.visibility = "hidden";
        }, 2000);
         return;
      }
      
        let email_data = localStorage.getItem("userdetails");
        let email=JSON.parse(email_data);
        let user_email=email.email;
        let password=email.password;

       if(log_email.value != user_email)
       {
        console.log("hi");
        invalid_mail.innerHTML="Enter a valid email";
        invalid_mail.style.color = "red";
        invalid_mail.style.visibility="visible";
        setTimeout(() => {
          invalid_mail.style.visibility = "hidden";
        }, 2000);
      
     
        
       }

         if(log_password.value != password)
       {
        console.log("bye");
         
        invalid_password.style.color = "red";
        invalid_password.innerHTML="Enter a Valid password"
        invalid_password.style.visibility="visible"
        setTimeout(() => {
          invalid_password.style.visibility = "hidden";
        }, 2000);
       

         return;
       }
        else if(log_email.value == user_email && log_password.value==password )
        {
          document.getElementById('loadingOverlay').style.visibility = 'visible';
          setTimeout(() => {
              window.location.href = './index.html';
          }, 1000);

       
     
          let ref_data=doc(db,"Learning",`User=${id}`);
          let data_set=await setDoc(
             ref_data,{
                 Find_Language_type:0,
                 find_index:0,
                 Html_Complete_Module:0,
                 Html_Total_Percentage:0,
                 Css_Complete_Module:0,
                 Css_Total_Percentage:0,
                 Javascript_Complete_Module:0,
                 Javascript_Total_Percentage:0,
                 Mysql_Complete_Module:0,
                 Mysql_Total_Percentage:0,
                 Php_Complete_Module:0,
                 Php_Total_Percentage:0,
                 Html_unlock_total_module:0,
                 Css_unlock_total_module:0,
                 Javascript_unlock_total_module:0,
                 Php_unlock_total_module:0,
                 Mysql_unlock_total_module:0,
             }
         ).then(()=>{
             alert("sucessfully");
         }).catch((err)=>{
             console.log(err);
         });

          


        }
       
      // });
}


// ----------forgot-----
let forgot_btn=document.querySelector("#forget")
let verify_btn=document.querySelector("#verify_button")

forgot_btn.addEventListener("click",()=>{

 document.querySelector(".maincontainer_foremail").style.display="block";
 document.querySelector(".maincontainer_2").style.display="none";
    
}
)

verify_btn.addEventListener("click",(event)=>{

 event.preventDefault();
 let mail_box=document.querySelector("#reset_id")
 document.querySelector(".container").style.display="block";
 document.querySelector(".maincontainer_foremail").style.display="none";
 document.querySelector(".maincontainer_2").style.display="none";
 let otp_random=Math.floor(Math.random()*100000);
 console.log(otp_random);
 let mail_msg= ` You recently requested to reset your password for your account. To complete the password reset process, please enter the following 
         OTP : <b>${otp_random}</b>`
         Email.send({
           SecureToken : "3530e414-b30b-4087-819e-ce07fc9da7b5",
           To : mail_box.value,
           From : "dckaplms@gmail.com",
           Subject : "Verify OTP",
           Body : mail_msg
       }).then(
         message => alert(message)
       ) 
})

let next_btn=document.querySelector("#otp_btn")

next_btn.addEventListener("click",()=>{
  document.getElementById('loadingOverlay').style.visibility = 'visible';
  setTimeout(() => {
    // alert("message")
  window.location.href = './Reset.html';
  }, 1000);
})





