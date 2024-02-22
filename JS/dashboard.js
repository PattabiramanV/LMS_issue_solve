"use strict"

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
  let searchicon = document.querySelector(".fas");
  console.log(searchicon);
  let Dckaplogo = document.querySelector(".DCKAPlOGO");
  darkLight.addEventListener("click", () => {
    body.classList.toggle("dark");
    searchicon.style.color = body.classList.contains("dark") ? "white" : "black";
    headings.forEach((heading) => {
      heading.style.color = body.classList.contains("dark") ? "white" : "black";
    });
    Dckaplogo.src = body.classList.contains("dark")
    ? "../Assests/Dckapwhite.png"
    : "../Assests/Dckap Logo.png";
  });
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
        window.location.href="/profile_user_page/profile.html"
})

let Course_navigate=document.querySelector(".Course_Down")
Course_navigate.addEventListener("click",()=>{
      window.location.href="/Profile_main_page/Courses.html"
})

// ------------------HTML Pie chart -------------------------
const chartData_html = {
  labels: ["Completed", "Not Completed"],
  data: [50, 50],
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

// ------------------ CSS Pie chart -------------------------
const chartData_css = {
    labels: ["Completed", "Not Completed"],
    data: [60, 40],
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

// ------------------- Javascript Piechart ----------------------
const chartData_js = {
    labels: ["Completed", "Not Completed"],
    data: [70, 30],
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
// ------------------- MySQL Piechart ----------------------
const chartData_mysql = {
    labels: ["Completed", "Not Completed"],
    data: [80, 20],
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



  