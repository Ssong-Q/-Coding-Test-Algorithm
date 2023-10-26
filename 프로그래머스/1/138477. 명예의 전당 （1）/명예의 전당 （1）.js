function solution(k, score) {
  let result = [];
  let beforeKArr = score.slice(0, k);
  let sortedBeforeKArr = beforeKArr.slice().sort((a, b) => a - b);
  let AfterArr = score.slice(k);

  if (k >= score.length) {
    beforeKArr = score.slice();
    for (let i = 0; i < beforeKArr.length; i++) {
      result.push(Math.min(...beforeKArr.slice(0, i + 1)));
    }
  } else {
    for (let i = 0; i < k; i++) {
      result.push(Math.min(...beforeKArr.slice(0, i + 1)));
    }

    for (let number of AfterArr) {
      if (number > sortedBeforeKArr[0]) {
        sortedBeforeKArr.shift();
        sortedBeforeKArr.push(number);
        sortedBeforeKArr.sort((a, b) => a - b);
      }
      result.push(Math.min(...sortedBeforeKArr));
    }
  }

  return result;
}