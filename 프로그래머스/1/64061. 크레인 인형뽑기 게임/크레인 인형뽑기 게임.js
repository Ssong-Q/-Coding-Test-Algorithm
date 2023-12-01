function solution(board, moves) {
  let answer = 0;
  let stack = [];
  for (x of moves) {
    const index = x - 1;
    for (let i = 0; i < board.length; i++) {
      const doll = board[i][index];
      if (doll !== 0) {
        if (doll === stack[stack.length - 1]) {
          answer += 2;
          stack.pop();
        } else {
          stack.push(doll);
        }
        board[i].splice(index, 1, 0);
        break;
      }
    }
  }
  return answer;
}