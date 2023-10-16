let sumArr = [];

const trioSum = (arr) => {
  if (arr.length < 3) {
    return;
  } else if (arr.length === 3) {
    sumArr.push(arr[0] + arr[1] + arr[2]);
    return;
  } else {
    for (let i = 1; i < arr.length - 1; i++) {
      for (let j = 2; j < arr.length; j++) {
        if (i >= j) {
          continue;
        }
        sumArr.push(arr[0] + arr[i] + arr[j]);
      }
    }
    arr.shift();
    trioSum(arr);
  }
};

function solution(number) {
  trioSum(number);
  let zeroNum = 0;
  for (let num of sumArr) {
    if (num === 0) {
      zeroNum += 1;
    }
  }
  return zeroNum;
}