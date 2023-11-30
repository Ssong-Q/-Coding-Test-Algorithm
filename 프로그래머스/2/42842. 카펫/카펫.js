function solution(brown, yellow) {
  let total = brown + yellow;
  for (let w = 3; w <= brown - 2; w++) {
    for (let h = 3; h <= brown - 2; h++) {
      if (w * h === total && w >= h) {
        if ((w - 2) * (h - 2) === yellow && 2 * w + 2 * h - 4 === brown)
          return [w, h];
      }
    }
  }
}