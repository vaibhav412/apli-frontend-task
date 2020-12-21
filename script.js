$(document).ready(() => {
    
    $('body').bootstrapMaterialDesign();
    
    $('.nav-tabs').scrollingTabs({
      bootstrapVersion: 4,
      scrollToTabEdge: true,
      enableSwiping: true,
      disableScrollArrowsOnFullyScrolled: true,
      leftArrowContent: `
        <div class="scrtabs-tab-scroll-arrow scrtabs-tab-scroll-arrow-left">
          <button class="scrtabs-arrow-btn scrtabs-click-target" type="button">
            <i class="mdi mdi-chevron-left"></i>
          </button>
        </div>`,
      rightArrowContent: `
        <div class="scrtabs-tab-scroll-arrow scrtabs-tab-scroll-arrow-right">
          <button class="scrtabs-arrow-btn scrtabs-click-target" type="button">
            <i class="mdi mdi-chevron-right"></i>
          </button>
        </div>`
    }).on('ready.scrtabs', () => {
      $('.nav-link').click(() => {
        setTimeout(() => {
          $('.nav-tabs').scrollingTabs('scrollToActiveTab');
        }, 10);
      });
    });
}
);

new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: ["O", "C", "E", "A", "N"],
      datasets: [{
        label: "Profile Radar",
        data: [1, 2, 3, 4, 5],
      }],
    },
    options: {
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            return data.datasets[tooltipItem.datasetIndex].label + ": " + tooltipItem.yLabel;
          }
        }
      }
    }
});

var gradeq1, gradeq2, gradeq3, gradeq4, gradeq5;

function gradeq1func(value){
  gradeq1 = value;
  console.log(gradeq1);
}

function question1(){
  var input = document.getElementById("q1comment");
  console.log('done');
  localStorage.setItem("gradeq1", gradeq1);
  localStorage.setItem("commentq1", input.value);
  document.getElementById("q1stat").innerHTML = "Your work has been saved!!";
}

function gradeq2func(value){
  gradeq2 = value;
  console.log(gradeq2);
}

function question2(){
  var input = document.getElementById("q2comment");
  console.log('done');
  localStorage.setItem("gradeq2", gradeq2);
  localStorage.setItem("commentq2", input.value);
  document.getElementById("q2stat").innerHTML = "Your work has been saved!!";
}

function gradeq3func(value){
  gradeq3 = value;
  console.log(gradeq3);
}

function question3(){
  var input = document.getElementById("q3comment");
  console.log('done');
  localStorage.setItem("gradeq3", gradeq3);
  localStorage.setItem("commentq3", input.value);
  document.getElementById("q3stat").innerHTML = "Your work has been saved!!";
}

function gradeq4func(value){
  gradeq4 = value;
  console.log(gradeq4);
}

function question4(){
  var input = document.getElementById("q4comment");
  console.log('done');
  localStorage.setItem("gradeq4", gradeq4);
  localStorage.setItem("commentq4", input.value);
  document.getElementById("q4stat").innerHTML = "Your work has been saved!!";
}

function gradeq5func(value){
  gradeq5 = value;
  console.log(gradeq5);
}

function question5(){
  var input = document.getElementById("q5comment");
  console.log('done');
  localStorage.setItem("gradeq5", gradeq5);
  localStorage.setItem("commentq5", input.value);
  document.getElementById("q5stat").innerHTML = "Your work has been saved!!";
}

if (typeof(Storage) !== "undefined") {
  document.getElementById("q1grade").innerHTML = localStorage.getItem("gradeq1");
  document.getElementById("q1comment").innerHTML = localStorage.getItem("commentq1");
  document.getElementById("q2grade").innerHTML = localStorage.getItem("gradeq2");
  document.getElementById("q2comment").innerHTML = localStorage.getItem("commentq2");
  document.getElementById("q3grade").innerHTML = localStorage.getItem("gradeq3");
  document.getElementById("q3comment").innerHTML = localStorage.getItem("commentq3");
  document.getElementById("q4grade").innerHTML = localStorage.getItem("gradeq4");
  document.getElementById("q4comment").innerHTML = localStorage.getItem("commentq4");
  document.getElementById("q5grade").innerHTML = localStorage.getItem("gradeq5");
  document.getElementById("q5comment").innerHTML = localStorage.getItem("commentq5");
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
