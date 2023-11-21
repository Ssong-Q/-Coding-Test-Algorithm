function solution(n) {
  let answer = 0,
    lt = 1,
    total = 0;
  const len = Math.ceil(n / 2);
  for (let rt = 1; rt <= len; rt++) {
    total += rt;
    if (total === n) answer++;
    if (total > n) {
      while (total > n) {
        total -= lt;
        lt++;
        if (total === n) {
          answer++;
        }
      }
    }
  }
  if (n === 1) return answer;
  else return answer + 1;
}