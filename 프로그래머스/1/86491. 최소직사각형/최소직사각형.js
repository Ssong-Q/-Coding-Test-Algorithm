function solution(sizes) {
  let answer = 0,
    width = Number.MIN_SAFE_INTEGER,
    height = Number.MIN_SAFE_INTEGER,
    arr = [];

  for (let card of sizes) {
    const [x, y] = card;
    arr.push([Math.min(x, y), Math.max(x, y)]);
  }

  for (let card of arr) {
    const [x, y] = card;
    if (x > width) width = x;
    if (y > height) height = y;
  }

  answer = width * height;

  return answer;
}