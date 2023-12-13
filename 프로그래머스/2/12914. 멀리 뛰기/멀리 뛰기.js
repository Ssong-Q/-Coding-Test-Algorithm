function solution(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let arr = [1, 2];
  for (let i = 1; i < n - 1; i++) {
    arr.push((arr[i] + arr[i - 1]) % 1234567);
  }
  return arr[n - 1];
}