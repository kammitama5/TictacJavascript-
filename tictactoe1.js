var matrix = ([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
var player = "X";

function Draw()
{
	console.log("Tic Tac Toe v1.0/n");
	for (var i = 0; i < 3; i++){
		for (var j = 0; j < 3; j++)
		{
			console.log(matrix[i][j]);
		}
		console.log("/");
	}

}

function Input(){
	
	var a = prompt("Please enter the number for field");
	console.log(a);
	
	if (a == 1){
		matrix[0][0] = player;
	}
	else if (a == 2){
		matrix[0][1] = player;
	}
	else if (a == "3"){
		matrix[0][2] = player;
	}
	else if (a == "4"){
		matrix[1][0] = player;
	}
	else if (a == "5"){
		matrix[1][1] = player;
	}
	else if (a == "6"){
		matrix[1][2] = player;
	}
	else if (a == "7"){
		matrix[2][0] = player;
	}
	else if (a == "8"){
		matrix[2][1] = player;
	}
	else if (a == "9"){
		matrix[2][2] = player;
	}
}

function TogglePlayer(){
	if (player == "X"){
		player = "O"
	}
	else
	{
		player = "X";
	}
	
}

function Win()
{
//rows
	if (matrix[0][0] == 'X' && matrix[0][1] == 'X' && matrix[0][2] == 'X')
		return 'X';
	if (matrix[1][0] == 'X' && matrix[1][1] == 'X' && matrix[1][2] == 'X')
		return 'X';
	if (matrix[2][0] == 'X' && matrix[2][1] == 'X' && matrix[2][2] == 'X')
		return 'X';
//columns
	if (matrix[0][0] == 'X' && matrix[1][0] == 'X' && matrix[2][0] == 'X')
		return 'X';
	if (matrix[0][1] == 'X' && matrix[1][1] == 'X' && matrix[2][1] == 'X')
		return 'X';
	if (matrix[0][2] == 'X' && matrix[1][2] == 'X' && matrix[2][2] == 'X')
		return 'X';

//diagonals
	if (matrix[0][0] == 'X' && matrix[1][1] == 'X' && matrix[2][2] == 'X')
		return 'X';
	if (matrix[2][0] == 'X' && matrix[1][1] == 'X' && matrix[0][2] == 'X')
		return 'X';
	

}
 
// Functions activate
Draw()
while (1){
	Input();
	Draw();
	if (Win() == "X"){
		console.log("X wins");
		break;
	}
	else if (Win() == "O"){
		console.log("O wins")
	}
	TogglePlayer();
}