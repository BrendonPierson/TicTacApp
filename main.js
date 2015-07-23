////jQuery Selectors for all potential win rows
var $col1 = $('.col1');
var $col2 = $('.col2');
var $col3 = $('.col3');
var $row1 = $('.row1');
var $row2 = $('.row2');
var $row3 = $('.row3');
var $diag1 = $('.diag1');
var $diag2 = $('.diag2');
var turn = 'x';


///an array of the win options
var ArrWinOptions = [$col1, $col2, $col3, $row1, $row2, $row3, $diag1, $diag2];

console.log("col 1: " + $col1);

//add x class to td on click 
$('td').click(function(){
	if (turn === 'x') {
		$(this).addClass(' x');
		turn = 'o';
	} else {
		$(this).addClass(' o').removeClass(' x');
		turn = 'x';
	}
	checkForWin();
})

console.log("Full Array: " ,ArrWinOptions);
console.log("ArrWinOptions first of the first" , ArrWinOptions[0][0])

//takes an array of potential wins and tests to see if any 
//of them have 3 of the x or o class by incrementing the xCount and yCount variables
function checkForWin(){
	for(var i = 0; i < ArrWinOptions.length; i++) {
		var xCount = 0;
		var yCount = 0;
		for (var j = 0; j < 4; j++) {
			if ($(ArrWinOptions[i][j]).hasClass('x')) {
				xCount += 1;
			} else if ($(ArrWinOptions[i][j]).hasClass('o')) {
				yCount += 1;
			}
		}
		if (xCount === 3) {
			alert('Player 1 Wins!');
			location.reload();
		} else if (yCount === 3) {
			alert('Player 2 Wins!');
			location.reload();
		}
	}
}

$('button').click(function(){
	location.reload();
})








