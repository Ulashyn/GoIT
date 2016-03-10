var listOfNames = new Array(5);
var userName;
var flag;

for (var i = 0; i < listOfNames.length; i++) {
	if (i == 0) {
		listOfNames[i] = prompt('Введіть ім\'я');		
	} else {
		listOfNames[i] = prompt('Введіть наступне ім\'я');
	}
}

userName = prompt('Введіть ім\'я користувача');

for (var i = 0; i < listOfNames.length; i++) {
	if (listOfNames[i] == userName) {
		flag = true;
	}
}

if (flag) {
		alert(userName + ', Ви успішно увійшли!');
} else{
		alert('Помилка! Не існує такого користувача!');
}

