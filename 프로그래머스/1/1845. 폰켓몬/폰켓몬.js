function solution(nums) {
  let answer = 0;

  const N = nums.length / 2;
  const len = [...new Set(nums)].length;

  if (N <= len) answer = N;
  else answer = len;

  return answer;
}