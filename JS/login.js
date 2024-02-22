let backtosignup=document.getElementById("backto_signup")
backtosignup.addEventListener("click", signup_page);

function signup_page() {
    document.getElementById('loadingOverlay').style.visibility = 'visible';
    setTimeout(() => {
        window.location.href = 'signup.html';
    }, 2000);
}

let login = document.querySelector("#login_btn");

login.addEventListener("click", (e) => {
   e.preventDefault(e)
     console.log("hi");
    window.location.href = "index.html";
});


// ---------password icon--------
let log_username=document.getElementById("log")
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