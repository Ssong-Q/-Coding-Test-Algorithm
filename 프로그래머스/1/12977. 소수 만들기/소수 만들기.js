function primeNum(num) {
  let result = true;
  const rootNum = Math.floor(Math.sqrt(num));
  for (let i = rootNum; i > 1; i--) {
    if (num % i === 0) result = false;
  }
  return result;
}

function solution(nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (primeNum(nums[i] + nums[j] + nums[k])) count += 1;
      }
    }
  }
  return count;
}