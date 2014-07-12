//

var current_row=1; 
var current_col=1;
var number_row=20;
var number_col=20;
var winner_row = 10;
var winner_col = 10;
// —оздание матрицы.
//
function createMatrix()
{
	var matrix = document.getElementById('matrix');
	var n = number_row * number_col;	
	
	for (var i = 0; i < n; i++)
	{
		var div = document.createElement('div');
		div.className = 'cell';
		matrix.appendChild(div);
	}
	
	var numberWinner = number_col * (winner_row - 1) + (winner_col - 1); 
	var winner = matrix.children [numberWinner];
	winner.className = 'yellow';
}

//
// „тение €чейки матрицы.
//
 function getCell(row, col)  
{
	// ‘ункци€ принимает координаты €чейки
	// должна вернуть true, если она закрашена,
	// false, если не закрашена.
	var matrix = document.getElementById('matrix');
	var cellNumber = number_col * (row - 1) + (col - 1);
	var div = matrix.children[cellNumber];

	return div.className = 'red';
}

//
// ”становка €чейки матрицы.
//
function setCell(row, col, val)
{

	// ‘ункци€ принимает координаты €чейки
	// если val == true, закрашивает €чейку,
	// иначе убирает закраску.
	var matrix = document.getElementById('matrix');
	var div = matrix.children[row*number_row+col];
	if (val)
		div.className = 'yellow';
	else
		div.className = 'white';

}

//
// “очка входа.
//
window.onload = function()
{
	createMatrix();	
	setCell(current_row, current_col, true);

	var div = matrix.children[Math.floor (Math.random()*number_row+col)];
	div.className = 'red';

}				
window.onkeydown = function move_snake ()
{
	var KEY_CODE = {
		LEFT: 37;
		UP: 38;
		RIGHT: 39;
		DOWN: 40;
	}
	
	//гасим текущую ячейку
	setCell (current_row,current_col, false);
	
	if (window.event.keyCode == KEY_CODE.LEFT && current_col != 0){
				current_col --;
		} else if (window.event.keyCode == KEY_CODE.UP && current_row != 0){
				current_row --;
		} else if (window.event.keyCode == KEY_CODE.RIGHT && current_col != number_row-1){
				current_col++;
		} else (window.event.keyCode == KEY_CODE.DOWN && current_row != number_row-1){
				current_row++;}
			
}
	// яблочко
	if (getCell (current_row, current_col))
		alert ("Игра закончена");
	
	//закрашиваем другую ячейку
	setCell(current_row, current_col, true);
}
