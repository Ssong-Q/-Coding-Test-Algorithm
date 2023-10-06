function solution(numbers) {
  const TOTAL = 45;
  let sum = 0;
  numbers.forEach((el) => (sum += el));
  return TOTAL - sum;
}
