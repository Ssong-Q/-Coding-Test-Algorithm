function solution(n) {
  let answer = 0;
  let nextNum = n + 1;
  let num = n.toString(2);
  let count = 0;
  num.split("").forEach((item) => item === "1" && count++);
  while (true) {
    let nextCount = 0;
    let biNextNum = nextNum.toString(2);
    biNextNum.split("").forEach((item) => item === "1" && nextCount++);
    if (count === nextCount) break;
    else nextNum++;
  }
  answer = nextNum;
  return answer;
}