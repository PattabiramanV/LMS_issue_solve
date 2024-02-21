let backtosignup=document.getElementById("backto_signup")
backtosignup.addEventListener("click", signup_page);

function signup_page() {
    document.getElementById('loadingOverlay').style.visibility = 'visible';
    setTimeout(() => {
        window.location.href = './signup.html';
    }, 2000);
}

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

// login_button.addEventListener("click",login)

// function login()
// {
    
//   let getRef = collection(db, "user_id_data");

//   let getData = await getDocs(getref);

//   console.log(getdata.size);
 
//   getdata.forEach((record)=>{
//       let email=record.email
      
//       let password=record.password
//       console.log(record.data());
//   });
// }