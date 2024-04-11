function solution(s) {
  let answer = 0;
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const arr = Object.entries(obj);

  arr.forEach((el) => {
    if (s.includes(el[0])) s = s.replaceAll(el[0], el[1]);
  });

  answer = parseInt(s);

  return answer;
}