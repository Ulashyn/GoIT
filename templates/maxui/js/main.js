// Chart on main
var c1 = document.getElementById("c1");
var parent1 = document.getElementById("p1");
c1.width = parent1.offsetWidth - 40;
c1.height = parent1.offsetHeight - 40;

// var data1 = {
//   labels : ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"],
//   datasets : [
//     {
//       fillColor : "rgba(0,120,165,.9)",
//       strokeColor : "rgba(25,35,45,1)",
//       pointColor : "#efefef",
//       pointStrokeColor : "rgba(25,35,45,1)",
//       data : [450,465,472,490,530,550,576,597,630,655,670,692,734,750,778,864,949,1154,1220,1400,1573,1670,1790,1960]
//     }
//   ]
// };

// var options1 = {
//   scaleFontColor : "rgba(25,35,45,1)",
//   scaleLineColor : "rgba(24,35,45,1)",
//   scaleGridLineColor : "transparent",
//   bezierCurve : false,
//   scaleOverride : true,
//   scaleSteps : 5,
//   scaleStepWidth : 340,
//   scaleStartValue : 450,
// };

// new Chart(c1.getContext("2d")).Line(data1,options1);

var myLineChart = new Chart(c1, {
    type: 'line',
    data: {
        
    labels: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"],
    datasets: [
        {
            label: "My First dataset",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(0,120,165,.5)",
            borderColor: "rgba(25,35,45,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(25,35,45,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(25,35,45,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [450,465,472,490,530,550,576,597,630,655,670,692,734,750,778,864,949,1154,1220,1400,1573,1670,1790,1960],
            spanGaps: false,
        }
    ]
    }

});

// For a pie chart
var c2 = document.getElementById("c2");
var parent2 = document.getElementById("p2");
c2.width = parent2.offsetWidth - 40;
c2.height = parent2.offsetHeight - 40;

var myPieChart = new Chart(c2,{
    type: 'pie',
    data: {
      labels: [
        "Red",
        "Blue",
        "Yellow"
      ],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
    }
});