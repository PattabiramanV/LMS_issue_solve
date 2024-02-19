"use strict"

let home=document.querySelector(".nav_home")
console.log(home)
let learning=document.querySelector(".nav_learning")
let dashboard=document.querySelector(".nav_dashboard")
let roadmap=document.querySelector(".nav_roadmap")
let navlogin=document.querySelector(".login")
let navsign=document.querySelector(".sign_up")
let searchbtn=document.querySelector(".button_explore")
let htmlbtn=document.querySelector(".html_btn")
let cssbtn=document.querySelector(".css_btn")
let jsbtn=document.querySelector(".js_btn")
let mysqlbtn=document.querySelector(".mysql_btn")
let phpbtn=document.querySelector(".php_btn")

learning.addEventListener("click",()=>{
    alert("learning menu clicked")
})

dashboard.addEventListener("click",()=>{
    alert("dashboard menu clicked")
})

roadmap.addEventListener("click",()=>{
    alert("roadmap menu clicked")
})

navlogin.addEventListener("click",()=>{

window.location.href='login.html';
    // alert("login button clicked")
})

navsign.addEventListener("click",()=>{
    // alert("sign_up button clicked")
    window.location.href='signup.html';


   
})




searchbtn.addEventListener("click",()=>{
    alert("explore clicked")
})

htmlbtn.addEventListener("click",()=>{
    alert("html button clicked")
})

cssbtn.addEventListener("click",()=>{
    alert("css button clicked")
})

jsbtn.addEventListener("click",()=>{
    alert("js button clicked")
})

mysqlbtn.addEventListener("click",()=>{
    alert("mysql button clicked")
})

phpbtn.addEventListener("click",()=>{
    alert("php button clicked")
})