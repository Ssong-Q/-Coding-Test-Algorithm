function solution(s) {
  let answer = [],
    turn = 0,
    zeroNum = 0;

  while (s !== "1") {
    turn++;

    const removeZero = s
      .split("")
      .filter((v) => v !== "0")
      .join("");
    const len = removeZero.length;
    zeroNum += s.length - len;

    s = len.toString(2);
  }

  answer = [turn, zeroNum];

  return answer;
}