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



//.....................................Content_JS...................................//




let quiz_btn=document.querySelector(".quiz_btn");
console.log(quiz_btn);
quiz_btn.addEventListener("click",()=>{
console.log('pattabi');
    window.location.href='learning_quiz.html';
})



let content=[

    
    [
`
        "&gt;!DOCTYPE html&lt;"
    "<html lang=\"en\">"
    "<head>"
    "  <title>Title of the document</title>"
    "</head>"
    "<body>"
    "<h1>This is a heading</h1>"
    "<p>This is a paragraph.</p>"
   
    "</body>"
    </html>`,
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
      <h2 class='heading_tag content_heading' >HTML Text Formatting:</h2>
      <h2 class=heading_tag>HTML Formatting Elements</h2>
      Formatting elements were designed to display special types of text:<br>
     <span class=red_color>&lt;b&gt;</span>      - Bold text<br>
     <span class=red_color>&lt;strong&gt;</span> - Important text<br>
     <span class=red_color>&lt;i&gt;</span>       - Italic text<br>
     <span class=red_color>&lt;em&gt;</span>     - Emphasized text<br>
     <span class=red_color>&lt;mark&gt;</span>   - Marked text<br>
     <span class=red_color>&lt;small&gt;</span>  - Smaller text<br>
     <span class=red_color>&lt;del&gt;</span> - Deleted text<br>
     <span class=red_color>&lt;ins&gt;</span> - Inserted text<br>
     <span class=red_color>&lt;sub&gt;</span>  - Subscript text<br>
     <span class=red_color>&lt;sup&gt;</span> - Superscript text<br>
      
      `,
      "https://www.youtube.com/embed/J0RlsXVpw6Y?si=UwZWiR4Kg7fnT7m8" ,


`

HTML  <span class=red_color>&lt;b&gt;</span> and  <span class=red_color>&lt;strong&gt;</span> Elements
The HTML <b> element defines bold text, without any extra importance.
Example
<b>This text is bold</b>
The HTML <strong> element defines text with strong importance. The content inside is typically displayed in bold.
Example
<strong>This text is important!</strong>

HTML <i> and <em> Elements
The HTML <i> element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.
Tip: The <i> tag is often used to indicate a technical term, a phrase from another language, a thought, a ship name, etc.
Example
<i>This text is italic</i>
The HTML <em> element defines emphasized text. The content inside is typically displayed in italic.
Tip: A screen reader will pronounce the words in <em> with an emphasis, using verbal stress.
Example
<em>This text is emphasized</em>


HTML <small> Element
The HTML <small> element defines smaller text:
Example
<small>This is some smaller text.</small>

HTML <mark> Element
The HTML <mark> element defines text that should be marked or highlighted:
Example
<p>Do not forget to buy <mark>milk</mark> today.</p>


HTML <del> Element
The HTML <del> element defines text that has been deleted from a document. Browsers will usually strike a line through deleted text:
Example
<p>My favorite color is <del>blue</del> red.</p>

HTML <ins> Element
The HTML <ins> element defines a text that has been inserted into a document. Browsers will usually underline inserted text:
Example
<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>
HTML <sub> Element
The HTML <sub> element defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font. Subscript text can be used for chemical formulas, like H2O:
Example
<p>This is <sub>subscripted</sub> text.</p>
HTML <sup> Element
The HTML <sup> element defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font. Superscript text can be used for footnotes, like WWW[1]:
Example
<p>This is <sup>superscripted</sup> text.</p>


  `






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
bottom_content.innerHTML=content[1][2]

// });

// });

// all_heading_title[0].addEventListener("click",()=>{


// content_top.innerHTML=content[1][0];
// iframe.src=content[1][1];
// bottom_content.innerText=content[1][2]

// })



// let arr=[
//   `pattabiiiiiiiiiiii
//   raman nnnnnnnnnnnnn
//   `
// ]
// console.log(arr[0]);
// bottom_content.innerHTML=arr[0]


let left_side_bar=document.querySelectorAll(".navlink");

left_side_bar[0].addEventListener("click",()=>{
  window.location.href='index.html  '
});

left_side_bar[1].addEventListener("click",()=>{
  window.location.href='Learning.html'
});
left_side_bar[2].addEventListener("click",()=>{

  window.location.href='dashboard.html';
});
left_side_bar[3].addEventListener("click",()=>{

  window.location.href='Roadmap.html';
});



