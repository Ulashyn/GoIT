var myBase = +prompt('Вираз');
var myExp = +prompt('Степінь');

if (myExp > 0) {
	console.log( pow(myBase, myExp) );
} else{
	console.log('Від\'ємна або нульова степінь не підтримується!');
}

function pow(myBase, myExp) {
	var result = 1;

	for (var i = 0; i < myExp; i++) {
		result = result * myBase; 
	}

	return result;
	
}