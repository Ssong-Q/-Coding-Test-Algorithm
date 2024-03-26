function solution(arr) {
  let answer = [[]];

  const rowLen = arr.length;
  const colLen = arr[0].length;

  answer = arr;

  if (rowLen > colLen) {
    const diff = rowLen - colLen;
    for (let i = 0; i < rowLen; i++) {
      for (let j = 0; j < diff; j++) arr[i].push(0);
    }
  }

  if (colLen > rowLen) {
    const diff = colLen - rowLen;
    const array = Array.from({ length: colLen }, () => 0);
    for (let i = 0; i < diff; i++) {
      arr.push(array);
    }
  }

  answer = arr;

  return answer;
}