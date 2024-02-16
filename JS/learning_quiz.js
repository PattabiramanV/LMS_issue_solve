"use strict"

let Quiz_object=[

    {
        Question:'1.What is Full form of HTML?',
        Options: ['Hyper Text Markup Language','Hyper Text Makeup Language',
        'Hyper Text Mark Language','Hyper Test Markup Language'],
        Answers:['Hyper Text Markup Language','<href>',
        'It defines a header for the document.','<table>','<body>']
    
    },

    {
        Question:'2.Which tag is used to create a hyperlink in HTML?',
        Options:['<link>','<a>','<href>','hyper']
     
    },
    {
        Question:`3.In HTML, what is the purpose of the &lt;head&gt; element?`,
        Options:['It contains the main content of the document.','It defines a header for the document.',
        'It provides metadata about the document.','It creates a navigation bar.' ]
 
    }
    // {
    //     Question:'4.Which HTML tag is used to define the structure of the table?',
    //     Options: ['<table>','<tr>','<td>','<th>']
    // },
    // {
    //     Question:'5.Which HTML tag is used to define the body of the HTML document?',
    //     Options:['<head>','<body>','<title>','<html>']
     
    // },
    // {
    //     Question:'6.Which HTML tag is used to define the body of the HTML document?',
    //     Options:['<head>','<body>','<title>','<html>']
     
    // }


]
console.log(Quiz_object.length);
let quiz_options=document.querySelectorAll("label");
let quiz_Question=document.getElementById("Quiz_question");
let next_btn=document.querySelector(".quiz_next_btn");
let previous_btn=document.querySelector(".previous_btn");
let submit_btn=document.querySelector('.quiz_sunmit_btn');
let form_radio_btn_4=document.forms.radio_4_btn_form;
let all_radio_btn=form_radio_btn_4.radio_value_1;

next_btn.addEventListener("click",function(){ Quiz_change_Fun(this)});
previous_btn.addEventListener("click",function(){ Quiz_change_Fun(this)});

let index=0;

let arr=[];
function Quiz_change_Fun(value){

   
    radio_value_change_Fun();
   

if(value.innerHTML=='Next'&& all_radio_btn.value!=''){
    index++;
    console.log(all_radio_btn.value);
    arr.push(all_radio_btn.value);
    form_radio_btn_4.reset();
 

}
else if(index!=0 && value.innerHTML=='Previous'){
    
index--;
let value=arr[arr.length-1];

let pre_index=Quiz_object[index].Options.indexOf(value);

all_radio_btn[pre_index].checked=true;
arr.pop();

}

quiz_Question.innerText=Quiz_object[index].Question;
quiz_options[0].innerText=Quiz_object[index].Options[0];
quiz_options[1].innerText=Quiz_object[index].Options[1];
quiz_options[2].innerText=Quiz_object[index].Options[2];
quiz_options[3].innerText=Quiz_object[index].Options[3];

button_showing_Fun();




}


function button_showing_Fun(){

    next_btn.style.display='block';
    previous_btn.style.display='block';
    submit_btn.style.display='none';
    next_btn.parentElement.style.justifyContent='space-between';

    if(index==Quiz_object.length-1){
        next_btn.style.display='none';
        submit_btn.style.display='block'
    }
    else if(index==0){
        previous_btn.style.display='none';
        next_btn.parentElement.style.justifyContent='end';

    }

};

function radio_value_change_Fun(){

    all_radio_btn[0].value=Quiz_object[index].Options[0];
    all_radio_btn[1].value=Quiz_object[index].Options[1];
    all_radio_btn[2].value=Quiz_object[index].Options[2];
    all_radio_btn[3].value=Quiz_object[index].Options[3];
}



let total_mark=0;
let main_quiz_div=document.querySelector('.bottom_content_quiz');
let Quiz_result_div=document.querySelector(".Answer_show_page");
let next_module_btn=document.querySelector("#next_module_btn");
let retry_btn=document.querySelector("#retry_btn");
let all_score_content=document.querySelectorAll("span");

submit_btn.addEventListener("click",()=>{

    radio_value_change_Fun();
    if(arr.length==Quiz_object.length-1){
        arr.push(all_radio_btn.value);

    }
arr.forEach((user_choose_value)=>{

Quiz_object[0].Answers.forEach((Excat_answer)=>{

if(Excat_answer==user_choose_value){

    total_mark++;
    
        }

})


})

alert(`Total Mark:${total_mark}/5`);
console.log(arr);
console.log(total_mark);

form_radio_btn_4.reset();
arr=[];
validate_quiz_fun();

});

//............................Quiz_Answer_page................................//

function validate_quiz_fun(){

    Quiz_result_div.classList.add("Answer_show_page_classlist");
    main_quiz_div.classList.add("bootm_content_quiz_classlist");

    all_score_content[0].innerHTML=Quiz_object.length;
    all_score_content[1].innerHTML=total_mark;
    all_score_content[2].innerHTML=Math.floor(total_mark/Quiz_object.length*100);
    if(total_mark!=Quiz_object.length){
   next_module_btn.style.display='none';
   retry_btn.style.display='block';
    }
    else{
        next_module_btn.style.display='block';
   retry_btn.style.display='none';
    }

}
retry_btn.addEventListener("click",()=>{
    index=0;
    arr=[];
     total_mark=0;

    Quiz_result_div.classList.remove("Answer_show_page_classlist");
    main_quiz_div.classList.remove("bootm_content_quiz_classlist");
    previous_btn.style.display='none';
    submit_btn.style.display='none';
    next_btn.style.display='block';
    quiz_Question.innerText=Quiz_object[index].Question;
quiz_options[0].innerText=Quiz_object[index].Options[0];
quiz_options[1].innerText=Quiz_object[index].Options[1];
quiz_options[2].innerText=Quiz_object[index].Options[2];
quiz_options[3].innerText=Quiz_object[index].Options[3];
    // Quiz_change_Fun();
button_showing_Fun()


});


next_module_btn.addEventListener("click",()=>{
    window.location.href="/Learn_study_page/index.html";
});

