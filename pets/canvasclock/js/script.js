var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#28d1fa';
ctx.lineWidth = 17;
ctx.lineCap = 'round';
ctx.shadowBlur = 15;
ctx.shadowColor = '#28d1fa';

function degToRad(degree) {
	var factor = Math.PI/180;
	return degree*factor;
}

function renderTime() {
	var now = new Date();
	var today = now.toDateString();
	var time = now.toLocaleTimeString();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var milliseconds = now.getMilliseconds();
	var newHours = hours+(minutes/60);
	var newMinutes = minutes+(seconds/60);
	var newSeconds = seconds+(milliseconds/1000);

	//Bacground
	gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
	gradient.addColorStop(0, '#09303a');
	gradient.addColorStop(1, 'black');
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 500, 500);

	//Hours
	ctx.beginPath();
	ctx.arc(250, 250, 200, degToRad(270), degToRad( (newHours*15)-90 ) );
	ctx.stroke();

	//Minutes
	ctx.beginPath();
	ctx.arc(250, 250, 170, degToRad(270), degToRad( (newMinutes*6)-90 ) );
	ctx.stroke();

	//Seconds
	ctx.beginPath();
	ctx.arc(250, 250, 140, degToRad(270), degToRad( (newSeconds*6)-90 ) );
	ctx.stroke();

	//Date
	ctx.font = "15px Arial";
	ctx.fillStyle = '#28d1fa';
	ctx.fillText(today, 195, 280);

	//Time
	ctx.font = "35px Arial bold";
	ctx.fillStyle = '#28d1fa';
	ctx.fillText(time, 170, 250);

	var dataUrl = canvas.toDataURL();

	document.getElementById('myImage').src = dataUrl;

}

setInterval(renderTime, 40);