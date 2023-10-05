function solution(num, total) {
  let answer = [];
  if (num % 2 === 1) {
    const MIDDLE_VALUE = total / num;
    const FIRST_VALUE = MIDDLE_VALUE - (num - 1) / 2;
    for (let i = 0; i < num; i++) {
      answer.push(FIRST_VALUE + i);
    }
  } else {
    const MIDDLE_VALUE = Math.floor(total / num);
    const FIRST_VALUE = MIDDLE_VALUE - (num - 2) / 2;
    for (let i = 0; i < num; i++) {
      answer.push(FIRST_VALUE + i);
    }
  }

  return answer;
}