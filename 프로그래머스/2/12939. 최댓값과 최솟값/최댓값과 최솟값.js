function solution(s) {
  const arr = s.split(" ");
  const maxNumber = Math.max(...arr);
  const minNumber = Math.min(...arr);

  return `${minNumber} ${maxNumber}`;
}