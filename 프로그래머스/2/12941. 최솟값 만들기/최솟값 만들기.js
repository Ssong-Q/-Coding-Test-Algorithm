function solution(A, B) {
  const SORTED_A = A.sort((a, b) => a - b);
  const SORTED_B = B.sort((a, b) => b - a);
  let result = 0;
  for (let i = 0; i < SORTED_A.length; i++) {
    result += SORTED_A[i] * SORTED_B[i];
  }
  return result;
}