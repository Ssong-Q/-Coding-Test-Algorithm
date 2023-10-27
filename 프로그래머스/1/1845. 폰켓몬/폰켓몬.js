function solution(nums) {
  let numArr = [...new Set(nums)];
  if (nums.length / 2 <= numArr.length) {
    return nums.length / 2;
  } else {
    return numArr.length;
  }
}