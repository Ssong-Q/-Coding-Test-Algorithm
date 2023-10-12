function solution(s) {
  let arr = s.split(" ");
  arr.forEach((el, index) => {
    let word = el.split("");
    for (let i = 0; i < word.length; i++) {
      i % 2 === 0
        ? word.splice(i, 1, word[i].toUpperCase())
        : word.splice(i, 1, word[i].toLowerCase());
    }
    arr.splice(index, 1, word.join(""));
  });
  return arr.join(" ");
}