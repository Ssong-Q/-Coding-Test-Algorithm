function seekNumberOfAliquot(number) {
  if (number === 1) return 1;
  let count = 0;
  for (let i = 1; i <= Math.floor(number / 2); i++) {
    if (number % i == 0) count++;
  }
  return count + 1;
}

function solution(number, limit, power) {
  let aliquotArr = [];
  for (let i = 1; i <= number; i++) {
    aliquotArr.push(seekNumberOfAliquot(i));
  }
  return aliquotArr.reduce((acc, v) => {
    if (v > limit) {
      return acc + power;
    } else {
      return acc + v;
    }
  }, 0);
}