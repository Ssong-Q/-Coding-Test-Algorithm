function solution(elements) {
  let answer = 0,
    stack = [],
    arr = [];

  const LEN = elements.length;

  for (let i = 1; i <= LEN; i++) {
    let total = 0;

    for (let j = 0; j < LEN; j++) {
      if (j === 0) {
        for (let k = 0; k < i; k++) {
          total += elements[k];
          stack.push(total);
        }
      } else {
        total -= elements[j - 1];
        total += elements[(j + i - 1) % LEN];
        stack.push(total);
      }
    }
  }

  arr = [...new Set(stack)];
  answer = arr.length;

  return answer;
}