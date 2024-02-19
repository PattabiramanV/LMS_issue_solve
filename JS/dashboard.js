// "use strict"

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
        window.location.href="/profile_user_page/profile.html"
})

let Course_navigate=document.querySelector(".Course_Down")
Course_navigate.addEventListener("click",()=>{
      window.location.href="/Profile_main_page/Courses.html"
})

// ------------------ Pie chart -------------------------
const chartData = {
  labels: ["Completed", "Not Completed"],
  data: [50, 50]
};

const myChart = document.querySelector(".my_chart").getContext('2d');

const ul = document.querySelector(".programming_status .details .list");

const ch = new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [{
      label: "Percentage",
      data: chartData.data,
    }],
  },
  options: {
    borderWidth: 8,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
  }
});

const populateUl = () => {
  chartData.labels.forEach((l, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${l}: <span class = "percentage">${chartData.data[i]}%</span>`
    ul.appendChild(li);
  });
};

populateUl();

var cross = document.querySelector(".cross");
var display_chart = document.querySelector(".display_chart");
var html_btn = document.querySelector(".html");

html_btn.addEventListener("click", () => {
  console.log("hi");
  display_chart.style.display = "block";
});

cross.addEventListener("click", () => {
  display_chart.style.display = "none";
})

