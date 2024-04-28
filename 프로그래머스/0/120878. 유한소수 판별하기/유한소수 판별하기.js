function solution(a, b) {
  let answer = 1,
    denominator = 0;

  const GCD = (num1, num2) => {
    while (num2 > 0) {
      let r = num1 % num2;
      num1 = num2;
      num2 = r;
    }

    return num1;
  };

  denominator = b / GCD(a, b);

  while (denominator > 1) {
    if (denominator % 2 === 0) {
      denominator = denominator / 2;
    } else if (denominator % 5 === 0) {
      denominator = denominator / 5;
    } else {
      answer = 2;
      break;
    }
  }

  return answer;
}