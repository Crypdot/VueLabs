console.log(document);

document.querySelector('#userForm').onkeyup = function(){
	let data = document.querySelectorAll('#userForm input');
	let paragraphs = document.querySelectorAll('#summary p');
	document.querySelector('#summary h1').innerHTML = data[0].value;
	paragraphs[0].innerHTML = data[1].value;
	paragraphs[1].innerHTML = data[2].value;
};


