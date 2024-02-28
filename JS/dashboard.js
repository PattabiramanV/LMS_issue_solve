"use strict"
//------------------------------- fire_base -----------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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
const db = getFirestore(); // Create a Firestore instance

// ------------ html firebase ---------------------

async function fetchDataAndUpdateHTML() 
{
  try 
  {
    const getRef = doc(db, 'Learning', '0');
    const getData = await getDoc(getRef);
    const data = getData.data();

        // Update HTML with fetched data
    document.querySelector('.Total_Quiz').textContent =  data.Html_Total_Percentage|| '0';
    document.querySelector('.Total_Ponits').textContent = data.Html_Complete_Module || '0';
    document.querySelector('.Total_Stars').textContent = data.Html_Complete_Module*2 || '0';
    localStorage.setItem('Total_Ponits', data.Html_Complete_Module);

  } 
  catch (error) 
  {
    console.error("Error fetching and updating data:", error); 
  }
}

fetchDataAndUpdateHTML(); // Call the function to fetch data and update HTML

// ------------ css firebase ---------------------

async function fetchDataAndUpdateCSS() 
{
  try 
  {
      const getRef = doc(db, 'Learning', '0');
      const getData = await getDoc(getRef);
      const data = getData.data();

      // Update HTML with fetched data
      document.querySelector('.Total_Quiz').textContent =  data.Html_Total_Percentage + data.Css_Total_Percentage|| '0';
      document.querySelector('.Total_Ponits').textContent = data.Html_Complete_Module + data.Css_Complete_Module|| '0';
      document.querySelector('.Total_Stars').textContent = (data.Html_Complete_Module + data.Css_Complete_Module) * 2 || '0';
      localStorage.setItem('Total_Ponits', data.Css_Complete_Module);

  } 
  catch (error) 
  {
      console.error("Error fetching and updating data:", error); 
  }
}

fetchDataAndUpdateCSS();

// ------------ js firebase ---------------------

async function fetchDataAndUpdateJS() 
{
    try 
    {
        const getRef = doc(db, 'Learning', '0');
        const getData = await getDoc(getRef);
        const data = getData.data();

        // Update HTML with fetched data
        document.querySelector('.Total_Quiz').textContent =  data.Html_Total_Percentage + data.Css_Total_Percentage + data.Javascript_Total_Percentage|| '0';
        document.querySelector('.Total_Ponits').textContent = data.Html_Complete_Module + data.Css_Complete_Module + data.Javascript_Complete_Module|| '0';
        document.querySelector('.Total_Stars').textContent = (data.Html_Complete_Module + data.Css_Complete_Module + data.Javascript_Complete_Module) * 2 || '0';
        localStorage.setItem('Total_Ponits', data.Javascript_Complete_Module);

    } 
    catch (error) 
    {
        console.error("Error fetching and updating data:", error); 
    }
}

fetchDataAndUpdateJS();

// ------------ mysql firebase ---------------------

async function fetchDataAndUpdateSQL() 
{
    try 
    {
        const getRef = doc(db, 'Learning', '0');
        const getData = await getDoc(getRef);
        const data = getData.data();

        // Update HTML with fetched data
        document.querySelector('.Total_Quiz').textContent =  data.Html_Total_Percentage + data.Css_Total_Percentage + data.Javascript_Total_Percentage + data.Mysql_Total_Percentage|| '0';
        document.querySelector('.Total_Ponits').textContent = data.Html_Complete_Module + data.Css_Complete_Module + data.Javascript_Complete_Module + data.Mysql_Complete_Module|| '0';
        document.querySelector('.Total_Stars').textContent = (data.Html_Complete_Module + data.Css_Complete_Module + data.Javascript_Complete_Module + data.Mysql_Complete_Module) * 2 || '0';
        localStorage.setItem('Total_Ponits', data.Javascript_Complete_Module);
    } 
    catch (error) 
    {
        console.error("Error fetching and updating data:", error); 
    }
}

fetchDataAndUpdateSQL();

// ---------------------------------



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

function toggleDarkMode() {
  const isDarkMode = body.classList.toggle("dark");
  document.body.classList.toggle("darkMode");
  document.querySelector(".dashboard_profile_content p").style.color = "white";
  document.querySelector(".dash").style.color = "white";
  sessionStorage.setItem("darkMode", isDarkMode);
}

const storedDarkMode = sessionStorage.getItem("darkMode");
if (storedDarkMode === "true") {
  toggleDarkMode();
}

darkLight.addEventListener("click", toggleDarkMode);



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

if (window.innerWidth < 768) 
{
  sidebar.classList.add("close");
} 
else 
{
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


// // Retrieve the value from localStorage
// const totalPointsFromLocalStorage = localStorage.getItem('Total_Ponits');

// // Convert the retrieved value to a number
// const totalPoints = parseFloat(totalPointsFromLocalStorage);

// ------------------HTML Pie chart -------------------------


async function HTMLchatr() 
{
  try 
  {
      const getRef = doc(db, 'Learning', '0');
      const getData = await getDoc(getRef);
      const data = getData.data();

      return (data.Html_Complete_Module) || '0';

  } 
  catch (error) 
  {
      console.error("Error fetching and updating data:", error); 
      return 0; // Return a default value in case of error
  }
}

// Call fetchDataAndUpdateHTML to get the total points
HTMLchatr().then(totalPoints => {
  console.log("",totalPoints);

const chartData_html = {
  labels: ["Completed", "Not Completed"],
  data: [totalPoints , 100-totalPoints],
};

const myChart_html = document.querySelector(".my_chart_html");

const ul_html = document.querySelector(".programming_status_html .details_html ul");

new Chart(myChart_html, {
  type: "doughnut",
  data: {
    labels: chartData_html.labels,
    datasets: [
                {
                    label: "Percentage",
                    data: chartData_html.data,
                },
                ],
             },
  options: {
    borderWidth: 4,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const populateUl = () => {
  chartData_html.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${l}: <span class = "percentage">${chartData_html.data[i]} % </span>`
    ul_html.appendChild(li);
  });
};

populateUl();

var cross_html = document.querySelector(".cross_html");
var display_chart_html = document.querySelector(".display_chart_html");
var html_btn = document.querySelector("#html_btn");

html_btn.addEventListener("click", () => {
  display_chart_html.style.display = "block";
  display_chart_css.style.display = "none";
  display_chart_js.style.display = "none";
  display_chart_mysql.style.display = "none";
});

cross_html.addEventListener("click", () => {
  display_chart_html.style.display = "none";
})
});

// ------------------ CSS Pie chart -------------------------


async function CSSchatr() 
{
  try 
  {
      const getRef = doc(db, 'Learning', '0');
      const getData = await getDoc(getRef);
      const data = getData.data();

      return (data.Css_Complete_Module) || '0';

  } 
  catch (error) 
  {
      console.error("Error fetching and updating data:", error); 
      return 0; // Return a default value in case of error
  }
}

// Call fetchDataAndUpdateHTML to get the total points
CSSchatr().then(totalPoints => {
  console.log("",totalPoints);

const chartData_css = {
    labels: ["Completed", "Not Completed"],
    data: [totalPoints, 100-totalPoints],
  };
  
  const myChart_css = document.querySelector(".my_chart_css");
  
  const ul_css = document.querySelector(".programming_status_css .details_css ul");
  
  new Chart(myChart_css, {
    type: "doughnut",
    data: {
      labels: chartData_css.labels,
      datasets: [
                  {
                      label: "Percentage",
                      data: chartData_css.data,
                  },
                  ],
               },
    options: {
      borderWidth: 4,
      borderRadius: 2,
      hoverBorderWidth: 0,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
  
  const populateUl2 = () => {
    chartData_css.labels.forEach((l, i) => {
      let li = document.createElement("li");
      li.innerHTML = `${l}: <span class = "percentage">${chartData_css.data[i]} % </span>`
      ul_css.appendChild(li);
    });
  };
  
  populateUl2();
  
  var cross_css = document.querySelector(".cross_css");
  var display_chart_css = document.querySelector(".display_chart_css");
  var css_btn = document.querySelector("#css_btn");
  
  css_btn.addEventListener("click", () => {
    display_chart_css.style.display = "block";
    display_chart_html.style.display = "none";
    display_chart_js.style.display = "none";
    display_chart_mysql.style.display = "none";
  });
  
  cross_css.addEventListener("click", () => {
    display_chart_css.style.display = "none";
  });
});

// ------------------- Javascript Piechart ----------------------

async function JSchatr() 
{
  try 
  {
      const getRef = doc(db, 'Learning', '0');
      const getData = await getDoc(getRef);
      const data = getData.data();

      return (data.Javascript_Complete_Module) || '0';

  } 
  catch (error) 
  {
      console.error("Error fetching and updating data:", error); 
      return 0; // Return a default value in case of error
  }
}

// Call fetchDataAndUpdateHTML to get the total points
JSchatr().then(totalPoints => {
  console.log("",totalPoints);

const chartData_js = {
    labels: ["Completed", "Not Completed"],
    data: [totalPoints, 100-totalPoints],
  };
  
  const myChart_js = document.querySelector(".my_chart_js");
  
  const ul_js = document.querySelector(".programming_status_js .details_js ul");
  
  new Chart(myChart_js, {
    type: "doughnut",
    data: {
      labels: chartData_js.labels,
      datasets: [
                  {
                      label: "Percentage",
                      data: chartData_js.data,
                  },
                  ],
               },
    options: {
      borderWidth: 4,
      borderRadius: 2,
      hoverBorderWidth: 0,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
  
  const populateUl3 = () => {
    chartData_js.labels.forEach((l, i) => {
      let li = document.createElement("li");
      li.innerHTML = `${l}: <span class = "percentage">${chartData_js.data[i]} % </span>`
      ul_js.appendChild(li);
    });
  };
  
  populateUl3();
  
  var cross_js = document.querySelector(".cross_js");
  var display_chart_js = document.querySelector(".display_chart_js");
  var js_btn = document.querySelector("#js_btn");
  
  js_btn.addEventListener("click", () => {
    display_chart_js.style.display = "block";
    display_chart_html.style.display = "none";
    display_chart_css.style.display = "none";
    display_chart_mysql.style.display = "none";
  });
  
  cross_js.addEventListener("click", () => {
    display_chart_js.style.display = "none";
  });
});
// ------------------- MySQL Piechart ----------------------

async function SQLchatr() 
{
  try 
  {
      const getRef = doc(db, 'Learning', '0');
      const getData = await getDoc(getRef);
      const data = getData.data();

      return (data.Mysql_Complete_Module) || '0';

  } 
  catch (error) 
  {
      console.error("Error fetching and updating data:", error); 
      return 0; // Return a default value in case of error
  }
}

// Call fetchDataAndUpdateHTML to get the total points
SQLchatr().then(totalPoints => {
  console.log("",totalPoints);

const chartData_mysql = {
    labels: ["Completed", "Not Completed"],
    data: [totalPoints, 100-totalPoints],
  };
  
  const myChart_mysql = document.querySelector(".my_chart_mysql");
  
  const ul_mysql = document.querySelector(".programming_status_mysql .details_mysql ul");
  
  new Chart(myChart_mysql, {
    type: "doughnut",
    data: {
      labels: chartData_mysql.labels,
      datasets: [
                  {
                      label: "Percentage",
                      data: chartData_mysql.data,
                  },
                  ],
               },
    options: {
      borderWidth: 4,
      borderRadius: 2,
      hoverBorderWidth: 0,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
  
  const populateUl4 = () => {
    chartData_mysql.labels.forEach((l, i) => {
      let li = document.createElement("li");
      li.innerHTML = `${l}: <span class = "percentage">${chartData_mysql.data[i]} % </span>`
      ul_mysql.appendChild(li);
    });
  };
  
  populateUl4();
  
  var cross_mysql = document.querySelector(".cross_mysql");
  var display_chart_mysql = document.querySelector(".display_chart_mysql");
  var mysql_btn = document.querySelector("#mysql_btn");
  
  mysql_btn.addEventListener("click", () => {
    display_chart_mysql.style.display = "block";
    display_chart_html.style.display = "none";
    display_chart_css.style.display = "none";
    display_chart_js.style.display = "none";
  });
  
  cross_mysql.addEventListener("click", () => {
    display_chart_mysql.style.display = "none";
  });
});


  // ----------------------------------------




  