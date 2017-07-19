var mo = document.getElementById('modal');
var mc = document.getElementById('modal-close');
var pu = document.getElementById('popup1');

mo.addEventListener('click', function (event) {
	pu.classList.add('visible');
});
mc.addEventListener('click', function (event) {
	pu.classList.remove('visible');
});
