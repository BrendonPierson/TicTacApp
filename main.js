////jQuery Selectors for all potential win rows
var $col1 = $('.col1');
var $col2 = $('.col2');
var $col3 = $('.col3');
var $row1 = $('.row1');
var $row2 = $('.row2');
var $row3 = $('.row3');
var $diag1 = $('.diag1');
var $diag2 = $('.diag2');

///an array of the win options
var ArrWinOptions = [$col1, $col2, $col3, $row1, $row2, $row3, $diag1, $diag2];

//add x class to td on click 
$('td').click(function(){
	$(this).addClass(' x');
})
//add o class to td on doubl click 
$('td').dblclick(function(){
	$(this).addClass(' o');
})


//takes an array of potential wins and tests to see if any 
//of them have 3 of the x or o class by incrementing the xCount and yCount variables
function checkForWin(){
	for(var i = 0; i < ArrWinOptions.length; i++) {
		var xCount = 0;
		var yCount = 0;
		for (var j = 0; j < 4; j++) {
			if (ArrWinOptions[i][j].hasClass('x')) {
				xCount += 1;
			} else if (ArrWinOptions[i][j].hasClass('o')) {
				yCount += 1;
			}
		}
	}
	if (xCount === 3) {
		alert('Player 1 Wins!');
	} else if (yCount === 3) {
		alert('Player 1 Wins!');
	}
}