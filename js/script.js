let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let winner = null;

const checkWinner = () => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = board[a];
      return;
    }
  }

  if (!board.includes('')) {
    winner = 'Draw';
  }
};

const handleCellClick = (index) => {
  if (!board[index] && !winner) {
    board[index] = currentPlayer;
    document.getElementById('board').children[index].textContent =
      currentPlayer;
    checkWinner();
    if (winner) {
      document.getElementById(
        'status'
      ).textContent = `Winner: Player ${winner}`;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      document.getElementById(
        'status'
      ).textContent = `Next player: ${currentPlayer}`;
    }
  }
};

const restartGame = () => {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  winner = null;
  document.getElementById('status').textContent = 'Next player: X';
  const cells = document.getElementsByClassName('cell');
  for (const cell of cells) {
    cell.textContent = '';
  }
};
