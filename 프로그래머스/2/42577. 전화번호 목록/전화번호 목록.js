function solution(arr) {
  let answer = true;
  let sortedArr = arr.sort();
  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i].indexOf(sortedArr[i - 1]) === 0) return false;
  }
  return answer;
}