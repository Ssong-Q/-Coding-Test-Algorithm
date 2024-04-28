function solution(k, score) {
  let answer = [],
    stack = [];

  for (let i = 0; i < score.length; i++) {
    if (stack.length < k) stack.push(score[i]);
    else {
      if (score[i] > stack[stack.length - 1]) {
        stack.pop();
        stack.push(score[i]);
      }
    }

    stack.sort((a, b) => b - a);
    answer.push(Math.min(...stack));
  }

  return answer;
}