function solution(arr) {
  let answer = [];
  let i = 0;
  while (i < arr.length) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
    i++;
  }
  return answer;
}
