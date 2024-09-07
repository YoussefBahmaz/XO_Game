let button_start = document.getElementById("start");
let first_page = document.getElementById("first_page");
let second_page = document.getElementById("second_page");
let third_page = document.getElementById("third_page");

button_start.onclick = function () {
	first_page.style.display = "none";
	second_page.style.display = "block";
	third_page.style.display = "none";
}

let name_player1 = document.getElementById("name_player1");
let name_player2 = document.getElementById("name_player2");
let confirm = document.getElementById("confirm_name");
let show_choose = document.getElementById("choose");
let button_x = document.getElementById("button_x");
let button_o = document.getElementById("button_o");
let p = document.getElementById("prg");
let title = document.getElementById("title");
let select;


confirm.onclick = function () {
	if (!((name_player1.value === "") || (name_player2.value === ""))) {
		show_choose.style.opacity = "1";
		p.innerText = `${name_player1.value}, choose :`
	}
}

button_x.onclick = function () {
	select = button_x.innerText;
	second_page.style.display = "none";
	third_page.style.display = "block";
	third_page.style.display = "flex";
	title.innerHTML = `${name_player1.value} start`;
}

button_o.onclick = function () {
	select = button_o.innerText;
	second_page.style.display = "none";
	third_page.style.display = "block";
	third_page.style.display = "flex";
	title.innerHTML = `${name_player1.value} start`;
}

function end(n1, n2, n3) {
	title.innerHTML = `${squares[n1]} is winner`;
	document.getElementById('square' + n1).style.color = 'white';
	document.getElementById('square' + n2).style.color = 'white';
	document.getElementById('square' + n3).style.color = 'white';
	document.getElementById('square' + n1).style.backgroundColor = 'black';
	document.getElementById('square' + n2).style.backgroundColor = 'black';
	document.getElementById('square' + n3).style.backgroundColor = 'black';
	restart.style.display = 'block';
}

let squares = [];
let nbr = 0;
let restart = document.getElementById('restart');

function winner() {
	let i = 1;
	while (i < 10) {
		squares[i] = document.getElementById('square' + i).innerHTML;
		i++;
	}

	if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
		end(1, 2, 3);
		nbr = 1;
	}
	else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '') {
		end(4, 5, 6);
		nbr = 1;
	}
	else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '') {
		end(7, 8, 9);
		nbr = 1;
	}

	else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
		end(1, 4, 7);
		nbr = 1;
	}
	else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
		end(2, 5, 8);
		nbr = 1;
	}
	else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
		end(3, 6, 9);
		nbr = 1;
	}

	else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '') {
		end(1, 5, 9);
		nbr = 1;
	}
	else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '') {
		end(3, 5, 7);
		nbr = 1;
	}
}

function fill(id) {
	let element = document.getElementById(id);
	if (select === 'X' && element.innerHTML == '') {
		element.innerHTML = 'X';
		select = 'O';
		title.innerHTML = `${select}`;
	}
	else if (select === 'O' && element.innerHTML == '') {
		element.innerHTML = 'O';
		select = 'X';
		title.innerHTML = `${select}`;
	}
	winner();
	if (nbr != 1 && (squares[1] != '' && squares[2] != '' && squares[3] != '' && squares[4] != '' && squares[5] != '' && squares[6] != '' && squares[7] != '' && squares[8] != '' && squares[9] != '')) {
		title.innerHTML = 'Draw';
		restart.style.display = 'block';
	}
	restart.addEventListener('click', function () {
		nbr = 0;
		element.innerHTML = '';
		title.innerHTML = `${name_player1.value} start`;
		element.style.backgroundColor = '#00ff00';
		element.style.color = '#000';
		restart.style.display = 'none';
		third_page.style.display = 'none';
		second_page.style.display = 'block';
	})
}
