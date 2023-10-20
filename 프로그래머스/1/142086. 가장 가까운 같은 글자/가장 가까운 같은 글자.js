function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    const INDEX = s.indexOf(s[i]);
    if (INDEX === i) {
      answer.push(-1);
    } else if (INDEX < i) {
      answer.push(i - INDEX);
      s = s.replace(s[i], " ");
    }
  }
  return answer;
}