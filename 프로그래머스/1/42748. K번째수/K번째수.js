function theNumber(array, command) {
  let slicedArray = array
    .slice(command[0] - 1, command[1])
    .sort((a, b) => a - b);
  return slicedArray[command[2] - 1];
}

function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    answer.push(theNumber(array, commands[i]));
  }
  return answer;
}