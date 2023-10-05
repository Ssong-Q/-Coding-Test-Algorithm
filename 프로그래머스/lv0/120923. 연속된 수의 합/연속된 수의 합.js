function solution(num, total) {
  let answer = [];
  if (num % 2 === 1) {
    const middleValue = total / num;
    const firstValue = middleValue - (num - 1) / 2;
    for (let i = 0; i < num; i++) {
      answer.push(firstValue + i);
    }
  } else {
    const middleValue = Math.floor(total / num);
    const firstValue = middleValue - (num - 2) / 2;
    for (let i = 0; i < num; i++) {
      answer.push(firstValue + i);
    }
  }

  return answer;
}