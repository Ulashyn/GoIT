// Chart on main
var c1 = document.getElementById("c1");
var parent = document.getElementById("p1");
c1.width = parent.offsetWidth - 40;
c1.height = parent.offsetHeight - 40;

var data1 = {
  labels : ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"],
  datasets : [
    {
      fillColor : "rgba(0,120,165,.9)",
      strokeColor : "rgba(255,255,255,1)",
      pointColor : "#133",
      pointStrokeColor : "rgba(255,255,255,1)",
      data : [450,465,472,490,530,550,576,597,630,655,670,692,734,750,778,864,949,1154,1220,1400,1573,1670,1790,1960]
    }
  ]
}

var options1 = {
  scaleFontColor : "rgba(255,255,255,1)",
  scaleLineColor : "rgba(255,255,255,1)",
  scaleGridLineColor : "transparent",
  bezierCurve : false,
  scaleOverride : true,
  scaleSteps : 5,
  scaleStepWidth : 340,
  scaleStartValue : 450,
}

new Chart(c1.getContext("2d")).Line(data1,options1);