function solution(d, budget) {
  d.sort((a, b) => a - b);
  let total = 0;
  let count = 0;
  let i = 0;
  while (total <= budget) {
    total += d[i];
    count++;
    i++;
  }
  return count - 1;
}