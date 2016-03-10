var title;
var question;
var answer;

var progTest = {
	block: function (){
		div = document.createElement('div');
		div.className = "container";
		document.body.insertBefore(div, document.body.firstChild);
		ol = document.createElement('ol');
		div.appendChild(ol)
	},
	title: function (title){
		var myTitle = title;
		h1 = document.createElement('h1');
		div.insertBefore(h1, ol);
		h1.className = "text-center";
		h1.innerHTML = myTitle;
	},
	question: function (question){
		var myQuestion = question;
		li = document.createElement('li');
		li.innerHTML = myQuestion;
		ol.appendChild(li);
	},
	answer: function (answer){
		var myAnswer = answer;
		divCheckBox = document.createElement('div');
		divCheckBox.className = "checkbox";
		li.appendChild(divCheckBox);
		label = document.createElement('label');
		divCheckBox.appendChild(label);
		input = document.createElement('input');
		input.type = "checkbox";
		label.appendChild(input);
		label.appendChild(document.createTextNode(myAnswer));
	},
	button: function (){
		but = document.createElement('button');
		but.className = "btn btn-info btn-lg center-block";
		but.innerHTML = "Проверить мои результаты";
		div.appendChild(but);
	}
}

progTest.block();
progTest.title("Тест по программированию");
progTest.question("Вопрос №1");
progTest.answer("Вариант ответа №1");
progTest.answer("Вариант ответа №2");
progTest.answer("Вариант ответа №3");
progTest.question("Вопрос №2");
progTest.answer("Вариант ответа №1");
progTest.answer("Вариант ответа №2");
progTest.answer("Вариант ответа №3");
progTest.question("Вопрос №3");
progTest.answer("Вариант ответа №1");
progTest.answer("Вариант ответа №2");
progTest.answer("Вариант ответа №3");
progTest.button();