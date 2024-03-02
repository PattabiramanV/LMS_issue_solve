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

let icon_eye=document.getElementById("icon_eyeforpassword")
icon_eye.innerHTML=` <i id="icon_eye" class="fa-solid fa-eye-slash"></i>`


icon_eye.addEventListener("click",changeicon)
 function changeicon()
{
if (log_password.type =='password') {
    log_password.type='text'
    icon_eye.innerHTML=` <i id="icon_eye" class="fa-solid fa-eye"></i>` 
}
else if (log_password.type =='text') {
    log_password.type='password'
    icon_eye.innerHTML=` <i id="icon_eye" class="fa-solid fa-eye-slash"></i>`
    
}
}


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


  import { getFirestore,getDocs,setDoc,doc,collection,getDoc,addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


let db=getFirestore(app);
let getref=collection(db,"SignUp_details");
let getdata =await  getDocs(getref);
// let id=getdata.size;

login_button.addEventListener("click",login_fun)
 async function login_fun(event)

{ 
      event.preventDefault()
      getdata .forEach(async (record) => {
        
        let email_data = record.data().email
        let password_data = record.data().password
        let id=record.data().user_id;
      //   // console.log(email_data);
// console.log(id);
        if(log_email.value == email_data && log_password.value==password_data )
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
      });
}




