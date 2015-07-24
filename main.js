////jQuery Selectors for all potential win rows
var $col1 = $('.col1');
	$col2 = $('.col2'),
	$col3 = $('.col3'),
	$row1 = $('.row1'),
	$row2 = $('.row2'),
	$row3 = $('.row3'),
	$diag1 = $('.diag1'),
	$diag2 = $('.diag2'),
	turn = 'x',
	xCount = 0,
	yCount = 0,	
	p1Score = 0,
	p2Score = 0;

///an array of the win options
var ArrWinOptions = [$col1, $col2, $col3, $row1, $row2, $row3, $diag1, $diag2];

//add x or o class to td on click 
$('td').click(function(){
	if (turn === 'x' ) {
		$(this).addClass(' x');
		turn = 'o';
	} else if ($(this).hasClass('x') === false){
		$(this).addClass(' o').removeClass(' x');
		turn = 'x';
	}
	checkForWin();
})

//takes an array of potential wins and tests to see if any 
//of them have 3 of the x or o class by incrementing the xCount and yCount variables
function checkForWin(){
	for(var i = 0; i < ArrWinOptions.length; i++) {
		for (var j = 0; j < 4; j++) {
			if ($(ArrWinOptions[i][j]).hasClass('x')) {
				xCount += 1;
			} else if ($(ArrWinOptions[i][j]).hasClass('o')) {
				yCount += 1;
			}
		}
		if (xCount === 3) {
			alert('Player 1 Wins!');
			p1Score += 1;
			reset();
			setScore();
		} else if (yCount === 3) {
			alert('Player 2 Wins!');
			p2Score += 1;
			reset();
			setScore();
		}
		xCount = 0;
		yCount = 0;
	}
}

//reset function 
function reset() {
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 4; j++) {
			if ($(ArrWinOptions[i][j]).hasClass('x')) {
				$(ArrWinOptions[i][j]).removeClass('x');
			} else if ($(ArrWinOptions[i][j]).hasClass('o')) {
				$(ArrWinOptions[i][j]).removeClass('o');
			}
		}
	}
}

//set score board
function setScore() {
	$('#p1score').html(p1Score);
	$('#p2score').html(p2Score);
}

//Reset Button removes classes
$('#newGame').click(function(){
	reset()
})

// Reset scoreboard
$('#reset').click(resetScore);

// reset score board 
function resetScore() {
	p1Score = 0;
	p2Score = 0;
	setScore();
}

// styling set it to always be a square
if ($('table').width() < 500){
	$('table').css('height', $('table').css('width'));	
}








