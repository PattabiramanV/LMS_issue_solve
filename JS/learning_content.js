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
let id=userDetails.user_id


console.log(id);



//.....................................Content_JS...................................//

        // let getRef = doc(db, "Learning", "0");

        // let getData = await getDoc(getRef);

        // console.log(getData.data().Find_Language_type);







let content=[

  [
    `
    <h1 class=heading_tag>Introduction:</h1>
    <h2 class=heading_tag> This is HTML Structure:</h2>
        &lt;!DOCTYPE html&gt;<br>
        &lt;html lang=\"en\"&gt;<br>
        &lt;head&gt;<br>
        &lt;title&gt;Title of the document</title&gt;<br>
        &lt;/head&gt;<br>
        &lt;body&gt;<br>
        &lt;h1&gt;This is a heading&lt;/h1&gt;<br>
        &lt;p&gt;This is a paragraph.&lt;/p&gt;<br>
       
        &lt;/body&gt;<br>
        &lt;/html&gt;<br>`,
     'https://www.youtube.com/embed/aICsCVyY1ZM?si=Ns5_mVi9oAxwv6Gk ',
`
<h2 class=heading_tag> Example Explained:</h2>
<li>The  <span class=red_color>&lt;!DOCTYPE html&gt;</span>declaration defines that this document is an HTML5 document.</li>
<li>The <span class=red_color>&lt;html&gt;</span> element is the root element of an HTML page</li>
<li>The<span class=red_color> &lt;head&gt;</span> element contains meta information about the HTML page</li>
<li>The <span class=red_color>&lt;title&gt;</span> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
<li>The <span class=red_color>&lt;body&gt;</span> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>

    
        

  `
  ]
,


    
    [
      `
      <h2 class='heading_tag content_heading' >HTML Text Formatting:</h2>
      <h2 class=heading_tag>HTML Formatting Elements:</h2>
      Formatting elements were designed to display special types of text:<br>
    <li> <span class=red_color>&lt;b&gt;</span>      - Bold text<br></li>
    <li> <span class=red_color>&lt;strong&gt;</span> - Important text<br></li>
    <li> <span class=red_color>&lt;i&gt;</span>       - Italic text<br></li>
    <li> <span class=red_color>&lt;em&gt;</span>     - Emphasized text<br></li>
    <li> <span class=red_color>&lt;mark&gt;</span>   - Marked text<br></li>
    <li> <span class=red_color>&lt;small&gt;</span>  - Smaller text<br></li>
     <li> <span class=red_color>&lt;del&gt;</span> - Deleted text<br></li>
     <li> <span class=red_color>&lt;ins&gt;</span> - Inserted text<br></li>
     <li> <span class=red_color>&lt;sub&gt;</span>  - Subscript text<br></li>
     <li> <span class=red_color>&lt;sup&gt;</span> - Superscript text<br></li>
      
      `,
      "https://www.youtube.com/embed/J0RlsXVpw6Y?si=UwZWiR4Kg7fnT7m8" ,


`

<h2 class=heading_tag>HTML  <span >&lt;b&gt;</span> and  <span>&lt;strong&gt;</span> Elements:<br></h2>
<p>The HTML <span class=red_color>&ltb&gt;</span> element defines bold text, without any extra importance.</p>
<h3>Example:</h3>
<li>&lt;b&gt;<strong>This text is bold </strong>&lt;b&gt;<br></li>

<li>The HTML <span class=red_color>&ltstrong&gt;</span> element defines text with strong importance. The content inside is typically displayed in bold.</li>

<li><span class=red_color>&ltstrong&gt;</span> This text is important!<span class=red_color>&ltstrong&gt;</span> </li><br>


<h2 class=heading_tag>HTML &lt;i&gt; and &lt;em&gt; Elements:</h2>
<li>The HTML <span class=red_color>&lti&gt;</span> element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.</li>
<li>The HTML <span class=red_color>&ltem&gt;</span>  element defines emphasized text. The content inside is typically displayed in italic.</li>
<h3>Example:</h3>
<li><span class=red_color>&lti&gt;</span> This text is italic<span class=red_color>&lt/i&gt;</span><br> </li>
<li><span class=red_color>&ltem&gt;</span> This text is emphasized<span class=red_color>&lt/em&gt;</span> <br></li><br>



<h2 class=heading_tag>HTML <span >&ltsmall&gt;</span> Element:</h2>

The HTML<span class=red_color>&ltsmall&gt;</span>  element defines smaller text:
<h3>Example:</h3>
<span class=red_color>&ltsmall&gt;</span> This is some smaller text.<span class=red_color>&lt/small&gt;</span> <br><br>

<h2 class=heading_tag>HTML<span> &ltmark&gt; </span>Element:</h2>
The HTML<span class=red_color>&ltmark&gt;</span>  element defines text that should be marked or highlighted:
<h3>Example:</h3>
&lt;p&gt;Do not forget to buy <span class=red_color>&ltmarkl&gt;</span> milk<span class=red_color>&ltmark&gt;</span> today.&lt;/p&gt;<br>


<h2 class=heading_tag>HTML<span> &ltdel&gt; </span>Element:</h2>
The HTML<span class=red_color>&ltdel&gt;</span>  element defines text that has been deleted from a document. Browsers will usually strike a line through deleted text:
<h3>Example:</h3>
&lt;p&gt;My favorite color is <span class=red_color>&ltdel&gt;</span> blue<span class=red_color>&lt/del&gt;</span>  red.&lt;/p&gt;<br>


  `






               ]
        
    
]


let all_heading_title=0;
let left_heading_content=document.querySelector(".left_heading_content");
let content_top=document.querySelector(".content_top");

let iframe=document.querySelector("iframe");

let bottom_content=document.querySelector(".bottom_content1");

// all_heading_title.forEach((heading,index)=>{

// heading.addEventListener("click",()=>{
 
content_top.innerHTML=content[1][0];
iframe.src=content[1][1];
bottom_content.innerHTML=content[1][2]

// });

// });


//..................DataSet in Firebase.....................//

// document.querySelector("#intoduction").addEventListener("click",async()=>{
// // //     console.log("pattabi");

// let id=0;

// let ref_data=doc(db,"Html_Content",`${id}`);
// let data_set=await updateDoc(
//     ref_data,{
//         top_content:content[0][0],
//         iframe:content[0][1],
//         bottom_content:content[0][2],
//         // left_headings:arr
//     }
// ).then(()=>{
//     alert("sucessfully");
// }).catch((err)=>{
//     console.log(err);
// });
// });






//.........................Left_Content_.........................//




let get_ref=doc(db,'Learning',`User=${id}`);
let get_data= await getDoc(get_ref);

let find_index=get_data.data().find_index;
let find_language=get_data.data().Find_Language_type;
let user_unlock_total_module=get_data.data().user_unlock_total_module
console.log(find_language);

let find_complete_module=get_data.data()[find_language + '_Complete_Module'];

let get_content=doc(db,`${find_language}_Content`,`0`)
let get_content_obj=await getDoc(get_content);
let left_headings=get_content_obj.data().left_headings;

let p_tag;
let lock_icon;

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
  
    let user_unlock_total_module=get_data.data()[find_language + '_unlock_total_module'];
console.log(user_unlock_total_module);

  
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



let quiz_btn=document.querySelector(".quiz_btn");

quiz_btn_Change_Fun()
async function quiz_btn_Change_Fun(){
  let get_ref=doc(db,'Learning',`User=${id}`);
let get_data= await getDoc(get_ref);

find_index=get_data.data().find_index;
  if(find_index==0){
 
    quiz_btn.style.display='none';
    }
    else{
      quiz_btn.style.display='block';
  
    }

}

  
quiz_btn.addEventListener("click",()=>{

    window.location.href='learning_quiz.html';
})


//..................................Side_bar.......................//
// let left_side_bar=document.querySelectorAll(".navlink");

// left_side_bar[0].addEventListener("click",()=>{
  
//   window.location.href='./index.html'
// });

// left_side_bar[1].addEventListener("click",()=>{

//   window.location.href='./Learning.html  '
// });
// left_side_bar[2].addEventListener("click",()=>{

//   window.location.href='./dashboard.html';
// });
// left_side_bar[3].addEventListener("click",()=>{

//   window.location.href='./Roadmap.html';
// });


//........................Left_heading_clickevent...............................//


let arr=[];
all_heading_title.forEach((title,index)=>{

  content_showing_fun(find_language,find_index);

 title.addEventListener("click",async()=>{
// console.log(index);
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

quiz_btn_Change_Fun();

  }
  else{

    alert("please complete previous module")
  }
 
 
  
  let get_ref=doc(db,'Learning',`User=${id}`);
  let get_data=await getDoc(get_ref);
 
   find_language=get_data.data().Find_Language_type;
   find_index=get_data.data().find_index;
  //  find_language_percentage=get_data.data().Html_Total_Percentage;
  //  find_complete_module=get_data.data().Html_Complete_Module;
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

