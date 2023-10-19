function solution(s) {
  const NUMBERS = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let word = s;

  for (let i = 0; i < NUMBERS.length; i++) {
    word = word.replaceAll(NUMBERS[i], i.toString());
  }

  return parseInt(word);
}