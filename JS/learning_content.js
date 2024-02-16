"use strict";

               
let quiz_btn=document.querySelector(".quiz_btn");
console.log(quiz_btn);
quiz_btn.addEventListener("click",()=>{
console.log('pattabi');
    window.location.href='/Content_Quiz/index.html';
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
'HTML Headings:<br>'+
'HTML headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags.<b>'+
'<br>&lt;h1&gt; defines the most important heading. &lt;h6&gt; defines the least<br> important heading:<b> '+
'<br>&lt;h1&gt;This is heading 1&lt;/h1&gt;<b>'+
'<br>&lt;h2&gt;This is heading 2&lt;/h2&gt;<b>'+
'<br>&lt;h3&gt;This is heading 3&lt;/h3&gt;<b>'+
'<br>&lt;h4&gt; is heading 4&lt;/h4&gt;<b>'+
'<br>&lt;h5&gt;This is heading 5&lt;/h5&gt;<b>'+
'<br>&lt;h6&gt;This is heading 6&lt;/h6&gt;<b>'+

'<br>HTML Paragraphs:<b>'+
'<br>HTML paragraphs are defined with the <p> tag:<br>'+
'<br>&lt;p&gt; is a paragraph.&lt;p&gt;<b>'+
'<br>&lt;p&gt;This is another paragraph.&lt;p&gt;<b>',

"https://www.youtube.com/embed/dF5cful6nOU?si=RqYJXP3gKRhXmEv3" ,

'<br>HTML Links<br>'+
'HTML links are defined with the <a> tag:'+
"The link's destination is specified in the href attribute."+
'Attributes are used to provide additional information about HTML elements.'+
'You will learn more about attributes in a later chapter.'+
'HTML Images'+
'HTML images are defined with the <img> tag.'+
'The source file (src), alternative text (alt), width, and height are provided as attributes:'+
'<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">'

    ]
    
    
    
]


let all_heading_title=document.querySelectorAll(".content_title");


let content_top=document.querySelector(".content_top");

let iframe=document.querySelector("iframe");

let bottom_content=document.querySelector(".bottom_content");

all_heading_title.forEach((heading,index)=>{

heading.addEventListener("click",()=>{
 
content_top.innerHTML=content[1][0];
iframe.src=content[1][1];
bottom_content.innerHTML=content[1][2]

});

});

// all_heading_title[0].addEventListener("click",()=>{


// content_top.innerHTML=content[1][0];
// iframe.src=content[1][1];
// bottom_content.innerText=content[1][2]

// })

document.querySelector("#intoduction").addEventListener("click",()=>{
    console.log("pattabi");
});
