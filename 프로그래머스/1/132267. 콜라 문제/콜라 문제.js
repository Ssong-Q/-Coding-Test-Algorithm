function solution(a, b, n) {
  let remainder = n;
  let freeCoke = 0;

  while (remainder >= a) {
    const SHARE = Math.floor(n / a);

    freeCoke = freeCoke + SHARE * b;
    remainder = n - SHARE * a + SHARE * b;
    n = remainder;
  }

  return freeCoke;
}