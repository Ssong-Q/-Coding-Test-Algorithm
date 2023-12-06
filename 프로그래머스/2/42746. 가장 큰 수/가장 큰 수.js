function solution(arr) {
  let answer = "";
  let sortedArr = arr.sort(
    (a, b) => String(b) + String(a) - (String(a) + String(b))
  );
  answer = sortedArr.join("");
  if (Number(answer) === 0) return "0";
  return answer;
}