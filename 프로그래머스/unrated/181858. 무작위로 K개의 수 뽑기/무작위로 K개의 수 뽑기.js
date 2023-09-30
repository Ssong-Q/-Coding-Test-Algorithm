function solution(arr, k) {
  let newArr = [... new Set(arr)];
  let i = 0;
  while (newArr.length < k) {
    newArr.push(-1);
    i++;
  }
  if (newArr.length > k) {
    newArr.splice(k, newArr.length - k);
  }
  return newArr;
}