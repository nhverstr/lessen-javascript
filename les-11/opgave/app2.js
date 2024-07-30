import readline from 'readline';

let gameBoard2 = {
	A: [' ', ' ', ' '],
	B: [' ', 'X', ' '],
	C: [' ', ' ', ' '],
};

function printBoard2() {
	let rowA = '|' + gameBoard2.A.join('|') + '|' + '\n';
	let rowB = '|' + gameBoard2.B.join('|') + '|' + '\n';
	let rowC = '|' + gameBoard2.C.join('|') + '|' + '\n';
	console.log(rowA + rowB + rowC);
}

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log('current board is:');
printBoard2();

let isPlaying = true;

while (isPlaying) {
	rl.question('What move do you want to make?', (move) => {
		if (!(move === 'O' || move === 'X')) {
			console.log('Invalid move!');
			// rl.close();
		} else {
			rl.question(
				'What position do you want to make this move at?',
				(position) => {
					makeMove(position, move);
					// rl.close();
				}
			);
		}
	});
}

rl.close();

function makeMove(position, move) {
	let row = position[0];
	let col = parseInt(position[1]) - 1;
	if (gameBoard2[row][col] === ' ') {
		gameBoard2[row][col] = move;
	} else {
		console.log('Position already taken or invalid');
		return;
	}
	printBoard2();
}
