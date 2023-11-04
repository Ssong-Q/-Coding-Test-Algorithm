function solution(s) {
  const arr = s.split(" ");
  const MAX = Math.max(...arr);
  const MIN = Math.min(...arr);
  return `${MIN} ${MAX}`;
}