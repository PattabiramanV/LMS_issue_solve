"use strict";

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
        window.location.href="profile.html"
})

let Course_navigate=document.querySelector(".Course_Down")
Course_navigate.addEventListener("click",()=>{
      window.location.href="Courses.html"
})



//.....................................Content_JS...................................//




let quiz_btn=document.querySelector(".quiz_btn");
console.log(quiz_btn);
quiz_btn.addEventListener("click",()=>{
console.log('pattabi');
    window.location.href='learning_quiz.html';
})



let content=[

    
    [

        "&gt;!DOCTYPE html&lt;"+
    "<html lang=\"en\">"+
    "<head>"+
    "  <title>Title of the document</title>"+
    "</head>"+
    "<body>"+
    "<h1>This is a heading</h1>"+
    "<p>This is a paragraph.</p>"+
   
    "</body>"+
    "</html>",
 '"https://www.youtube.com/embed/Y7S9Z26Q6tQ?si=bmK9eyMR5fpBUW8w" ',
 'HTML stands for Hyper Text Markup Language <br>HTML is the standard markup <b>'+
  'language for creating Web pages <br> HTML describes the structure of a <b>'+
  'Web page<br>HTML consists of a series of elements <br>'+
 'HTML elements tell the browser how to display the content <br>'+
 'HTML elements label pieces of content such as "this is a heading", "this is'+
 ' a paragraph", "this is a link", etc.<br>'

    ],

    
   [
    `
        <h2 class=heading_tag> HTML Attributes:</h2>
    
        All HTML elements can have attributes
    
        Attributes provide additional information about elements <br>
    
        Attributes are always specified in the start tag <br>
    
         Attributes usually come in name/value pairs like: <b>name="value"</b>
        
        <h2 class=heading_tag>The href Attribute: </h2>
    
        The <span class=red_color>&lt;a&gt</span> tag defines a hyperlink. The <span class=red_color>href</span> attribute specifies the URL of the page the link goes to:
    
        <h2 class=heading_tag>Example:</h2>
       &lt;!DOCTYPE html&gt;<br>
        &lt;html&gt; <br>
        &lt;body&gt;<br>
        
        &lt;h2&gt;The href Attribute&lt;/h2&gt<br>
        
        &lt;p&gt;HTML links are defined with the a tag. The link address is specified in the href attribute:&lt;/p&gt;<br>
        
        &lt;a <span class=red_color>href</span>="https://www.w3schools.com"&gt;Visit W3Schools&lt;/a&gt;<br>
        
        &lt;/body&gt;<br>
      
        &lt;/html&gt;
        
        
        The src Attribute
        The <img> tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:
        Example
        <img src="img_girl.jpg">
        
        The alt Attribute
        The required alt attribute for the <img> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the src attribute, or if the user uses a screen reader.
        Example
        <img src="img_girl.jpg" alt="Girl with a jacket">
        
        The: style Attribute
        The style attribute is used to add styles to an element, such as color, font, size, and more.
         Example:
        <p style="color:red;">This is a red paragraph.</p>`,  
        `https://www.youtube.com/embed/j2DhhN-_2Ww?si=t7Yk1ir56zjm_bdq`
    
    
       ]
       
    
]


let all_heading_title=document.querySelectorAll(".content_title");


let content_top=document.querySelector(".content_top");

let iframe=document.querySelector("iframe");

let bottom_content=document.querySelector(".bottom_content1");

// all_heading_title.forEach((heading,index)=>{

// heading.addEventListener("click",()=>{
 
content_top.innerHTML=content[1][0];
iframe.src=content[1][1];
bottom_content.innerHTML=arr[0]

// });

// });

// all_heading_title[0].addEventListener("click",()=>{


// content_top.innerHTML=content[1][0];
// iframe.src=content[1][1];
// bottom_content.innerText=content[1][2]

// })

document.querySelector("#intoduction").addEventListener("click",()=>{
    console.log("pattabi");
});

let arr=[
  `pattabiiiiiiiiiiii
  raman nnnnnnnnnnnnn
  `
]
console.log(arr[0]);
bottom_content.innerHTML=arr[0]
