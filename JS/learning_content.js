"use strict";

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
  import { getFirestore, getDoc, getDocs, doc, setDoc, updateDoc, addDoc,  collection } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
  
let db=getFirestore(app);

var userDetailsString = localStorage.getItem("userdetails");

var userDetails = JSON.parse(userDetailsString);
let id=userDetails.user_id;


//.....................................Content_JS...................................//

      

let all_heading_title=0;
let left_heading_content=document.querySelector(".left_heading_content");
let content_top=document.querySelector(".content_top");

let iframe=document.querySelector("iframe");

let bottom_content=document.querySelector(".bottom_content1");


//.........................Left_Content_.........................//




let get_ref=doc(db,'Learning',`User=${id}`);
let get_data= await getDoc(get_ref);

let find_index=get_data.data().find_index;
let find_language=get_data.data().Find_Language_type;
let user_unlock_total_module=get_data.data()[find_language + '_unlock_total_module'];
let find_complete_module=get_data.data()[find_language + '_Complete_Module'];

let get_content=doc(db,`${find_language}_Content`,`0`)
let get_content_obj=await getDoc(get_content);
let left_headings=get_content_obj.data().left_headings;

let p_tag;
let lock_icon;
// console.log(user_unlock_total_module);
heading_append_Fun(left_headings);

function heading_append_Fun(arr){
  left_heading_content.innerHTML='';
  arr.forEach((value,index)=>{

    let content_heading_div=document.createElement("div")
    content_heading_div.className='img_tag learnig_tile';
    
     p_tag=document.createElement("p");
    p_tag.className='content_title';
    p_tag.innerHTML=value;
    
     lock_icon=document.createElement("i");
    lock_icon.className='fa-solid fa-lock';
    
    content_heading_div.append(p_tag,lock_icon);

    left_heading_content.append(content_heading_div);
  
    if(index<find_complete_module+1 || (index<=find_complete_module+1 && find_complete_module!=0 ) ){
      lock_icon.classList.add("lock_remove_classlist");
      p_tag.classList.add("left_heding");
    }
   else if(user_unlock_total_module>=index){
    lock_icon.classList.add("lock_remove_classlist");
    p_tag.classList.add("left_heding");
   }

  
   
    
  })
all_heading_title=document.querySelectorAll(".content_title");

}


let Exercise_btn=document.querySelector(".Exercise_btn");

content_btn_Change_Fun()
async function content_btn_Change_Fun(){

  let get_ref=doc(db,'Learning',`User=${id}`);
  let get_data= await getDoc(get_ref);
  find_index=get_data.data().find_index;

Exercise_btn.style.display='block';
  if(find_index==0){
    Exercise_btn.style.display='none';
    }
    
  }

  
Exercise_btn.addEventListener("click",()=>{

    window.location.href='learning_quiz.html';
})


//........................Left_heading_clickevent...............................//


let arr=[];
all_heading_title.forEach((title,index)=>{

  content_showing_fun(find_language,find_index);

 title.addEventListener("click",async()=>{

  if(find_complete_module+1>=index){
    let ref_data=doc(db,"Learning",`User=${id}`);
    let get_data= await getDoc(ref_data);
    let user_unlock_total_module=get_data.data()[find_language + '_unlock_total_module'];
    let data_set=await updateDoc(
        ref_data,{
            find_index:index,
            
        }
    )
    if(user_unlock_total_module<index){
      updateDoc(
        ref_data,{
          
          [find_language + '_unlock_total_module']:index
            
        }
    )
    }
    
    all_heading_title=document.querySelectorAll(".content_title");
    all_heading_title[index].parentElement.lastElementChild.classList.add("lock_remove_classlist")
    all_heading_title[index].classList.add("left_heding");

    content_btn_Change_Fun();

  }
  else{

    alert("please complete previous module")
  }
 
 
  
  let get_ref=doc(db,'Learning',`User=${id}`);
  let get_data=await getDoc(get_ref);
 
   find_language=get_data.data().Find_Language_type;
   find_index=get_data.data().find_index;

  content_showing_fun(find_language,find_index);

   });

  });


async function content_showing_fun(language,index){
  console.log("raman");
  let ref=doc(db,`${language}_Content`,`${index}`);
  let data_ref=await getDoc(ref);


content_top.innerHTML=data_ref.data().top_content;
iframe.src=data_ref.data().iframe;
bottom_content.innerHTML=data_ref.data().bottom_content;


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

//............................Dark_Mode......................................//
let Dckaplogo = document.querySelector(".DCKAPlOGO");
Dckaplogo.addEventListener("click",()=>{
  window.location.href='./index.html'
})
let searchicon = document.querySelector(".fas");
function toggleDarkMode() {

  const isDarkMode = body.classList.toggle("dark");
  document.body.classList.toggle("dark-mode");
  searchicon.style.color = isDarkMode ? "white" : "black";
 
  Dckaplogo.src = body.classList.contains("dark")
  ? "./Assests/Dckapwhite.png"
  : "./Assests/Logodk.png";
 

  sessionStorage.setItem("darkMode", isDarkMode);
}

const storedDarkMode = sessionStorage.getItem("darkMode");
if (storedDarkMode === "true") {
  toggleDarkMode();
}

darkLight.addEventListener("click", toggleDarkMode);





// Profile..................................................................//

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


// profile img take in localstorage

// const profileImg = document.querySelector(".profile");
// profileImg.src = storedImageURL;

// Retrieve imageURL from localStorage when the page loads

try {
  const profileImg = document.querySelector(".profile");
  const docRef = doc(db, 'users_img', `${id}`);
  const docSnapimg = await getDoc(docRef);

  if (docSnapimg.exists()) {
      const userDataimg = docSnapimg.data();
      profileImg.src = userDataimg.imageURL;
  } else {
      console.log("The image is not found in Firestore.");
  }
} catch (error) {
  console.error("Error getting document:", error);
  alert("Error getting user image. Please try again.");
}

window.addEventListener("load", async function () {
  const profileImg = document.querySelector(".profile");

  try {
    const docRef = doc(db, 'users_img', `${id}`);
    const docSnapimg = await getDoc(docRef);

    if (docSnapimg.exists()) {
      const userDataimg = docSnapimg.data();
      profileImg.src = userDataimg.imageURL;
    } else {
      console.log("The image is not found in Firestore.");
    }
  } catch (error) {
    console.error("Error getting document:", error);
    alert("Error getting user image. Please try again.");
  }
});

