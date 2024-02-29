"use strict"

let home=document.querySelector(".nav_home")
console.log(home)
let learning=document.querySelector(".nav_learning")
let dashboard=document.querySelector(".nav_dashboard")
let roadmap=document.querySelector(".nav_roadmap")
let navlogin=document.getElementById("login")
let navsign=document.getElementById("signup")
let searchbtn=document.querySelector(".button_explore")
let htmlbtn=document.querySelector(".html_btn")
let cssbtn=document.querySelector(".css_btn")
let jsbtn=document.querySelector(".js_btn")
let mysqlbtn=document.querySelector(".mysql_btn")
let phpbtn=document.querySelector(".php_btn")

// learning.addEventListener("click",()=>{
//     alert("learning menu clicked")
// })

dashboard.addEventListener("click",()=>{
    window.location.href="./dashboard.html";
})

roadmap.addEventListener("click",()=>{
    window.location.href="./Roadmap.html";
})

learning.addEventListener("click",()=>{
    window.location.href="./Learning.html";
})



navlogin.addEventListener("click",()=>{
     window.location.href='./login.html'
})

navsign.addEventListener("click",()=>{
    // alert("sign_up button clicked")
    window.location.href='./signup.html';


   
})






let left_side_bar=document.querySelectorAll(".navlink");

left_side_bar[0].addEventListener("click",()=>{
  window.location.href='./index.html'
});

left_side_bar[1].addEventListener("click",()=>{

  window.location.href='./Learning.html'
});
left_side_bar[2].addEventListener("click",()=>{

  window.location.href='./dashboard.html';
});
left_side_bar[3].addEventListener("click",()=>{

  window.location.href='./Roadmap.html';
});



let  Explorebtn=document.querySelectorAll(".enroll_btn")

Explorebtn.forEach((btn)=>{
          btn.addEventListener("click",()=>{
            window.location.href='/.learning_content.html'
          })
})