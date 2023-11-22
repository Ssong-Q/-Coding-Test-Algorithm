function conversion(s) {
  let zeroNum = 0;
  let s2 = s.replaceAll("0", "");
  const len = s.length;
  const s2Len = s2.length;
  zeroNum = len - s2Len;
  s2 = s2Len.toString(2);
  return [zeroNum, s2];
}

function solution(s) {
  let answer;
  let zeroNum = 0;
  let count = 0;
  let string = s;
  while (string !== "1") {
    let num;
    count++;
    [num, string] = conversion(string);
    zeroNum += num;
  }
  answer = [count, zeroNum];
  return answer;
}