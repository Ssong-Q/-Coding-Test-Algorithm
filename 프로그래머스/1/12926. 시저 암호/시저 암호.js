function moveChar(string) {
  const charCode = string.charCodeAt(0);
  if (charCode === 122) {
    return String.fromCharCode(97);
  } else if (charCode === 90) {
    return String.fromCharCode(65);
  }
  return String.fromCharCode(charCode + 1);
}

function solution(s, n) {
  let answer = "";
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      continue;
    }
    for (let j = 0; j < n; j++) {
      arr.splice(i, 1, moveChar(arr[i]));
    }
  }
  answer = arr.join("");
  return answer;
}