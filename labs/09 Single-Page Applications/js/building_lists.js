var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);

var data = JSON.parse(request.responseText);

var books = data.books;

var table = document.createElement("table");

document.body.appendChild(table);

var list = document.createElement('ul');
for (let i=0; i < books.length; i++) {
	console.log(books[i].title);
	var item = document.createElement('li');
	item.innerHTML = books[i].title;
	list.appendChild(item);
}


function generateTableHead(table, books){
	let thead = table.createTHead();
	let row = thead.insertRow();
	for(let key of books){
		let th = document.createElement("th");
		let text = document.createTextNode(key);
		th.appendChild(text);
		row.appendChild(th);
	}
}

function generateTable(table, books){
	for(let element of books){
		let row = table.insertRow();
		for(let key in element){
			let cell = row.insertCell();
			let text = document.createTextNode(element[key]);
			cell.appendChild(text);
		}
	}
}

let headers = Object.keys(books[0]);
generateTableHead(table, headers);
generateTable(table,books);

document.body.appendChild(list);

table.addEventListener('click', clickHandler)

function clickHandler(e){
	document.getElementById("BookTitle").innerHTML = e.target.closest('tr').firstChild.textContent;
}