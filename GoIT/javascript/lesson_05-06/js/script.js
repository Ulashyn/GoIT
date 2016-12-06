
//define variables
var base = 60; 
var clocktimer,dateObj,dh,dm,ds,ms; 
var readout=''; 
var h=1, m=1, tm=1,s=0,ts=0,ms=0,show=true, init=0, ii=0; 
//function for clear field
function clearСlock() { 
	clearTimeout(clocktimer); 
	h=1;m=1;tm=1;s=0;ts=0;ms=0; 
	init=0;show=true; 
	readout='00:00:00.00'; 
	document.TestForm.stopwatch.value=readout; 
	ii = 0; 
} 
//function for start timer
function startTIME() { 
	var cdateObj = new Date(); 
	var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
	if (t>999) { s++; } 
	if (s>=(m*base)) { 
		ts=0; 
		m++; 
	} else { 
		ts=parseInt((ms/100)+s); 
		if(ts>=base) { ts=ts-((m-1)*base); } 
	} 
	if (m>(h*base)) { 
		tm=1; 
		h++; 
	} else { 
		tm=parseInt((ms/100)+m); 
		if(tm>=base) { tm=tm-((h-1)*base); } 
	} 
	ms = Math.round(t/10); 
	if (ms>99) {ms=0;} 
	if (ms==0) {ms='00';} 
	if (ms>0&&ms<=9) { ms = '0'+ms; } 
	if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; } 
	dm=tm-1; 
	if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; } 
	dh=h-1; 
	if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; } 
	readout = dh + ':' + dm + ':' + ds + '.' + ms; 
	if (show==true) { document.TestForm.stopwatch.value = readout; } 
	clocktimer = setTimeout("startTIME()",1); 
} 
//function for pause
function pause() { 
	if (init==0) { dateObj = new Date(); 
	startTIME(); 
	init=1; 
	} else { if(show==true) { 
	show=false; 
	} else { show=true; } } 
} 




// var title;
// var question;
// var answer;

// var progTest = {
// 	block: function (){
// 		div = document.createElement('div');
// 		div.className = "container";
// 		document.body.insertBefore(div, document.body.firstChild);
// 		ol = document.createElement('ol');
// 		div.appendChild(ol)
// 	},
// 	title: function (title){
// 		var myTitle = title;
// 		h1 = document.createElement('h1');
// 		div.insertBefore(h1, ol);
// 		h1.className = "text-center";
// 		h1.innerHTML = myTitle;
// 	},
// 	question: function (question){
// 		var myQuestion = question;
// 		li = document.createElement('li');
// 		li.innerHTML = myQuestion;
// 		ol.appendChild(li);
// 	},
// 	answer: function (answer){
// 		var myAnswer = answer;
// 		divCheckBox = document.createElement('div');
// 		divCheckBox.className = "checkbox";
// 		li.appendChild(divCheckBox);
// 		label = document.createElement('label');
// 		divCheckBox.appendChild(label);
// 		input = document.createElement('input');
// 		input.type = "checkbox";
// 		label.appendChild(input);
// 		label.appendChild(document.createTextNode(myAnswer));
// 	},
// 	button: function (){
// 		but = document.createElement('button');
// 		but.className = "btn btn-info btn-lg center-block";
// 		but.innerHTML = "Проверить мои результаты";
// 		div.appendChild(but);
// 	}
// }

// progTest.block();
// progTest.title("Тест по программированию");
// progTest.question("Вопрос №1");
// progTest.answer("Вариант ответа №1");
// progTest.answer("Вариант ответа №2");
// progTest.answer("Вариант ответа №3");
// progTest.question("Вопрос №2");
// progTest.answer("Вариант ответа №1");
// progTest.answer("Вариант ответа №2");
// progTest.answer("Вариант ответа №3");
// progTest.question("Вопрос №3");
// progTest.answer("Вариант ответа №1");
// progTest.answer("Вариант ответа №2");
// progTest.answer("Вариант ответа №3");
// progTest.button();