function solution(number) {
  var answer = 0;
  let sum_num = 0;
  for (let i = 0; i < number.length; i++) {
    sum_num += Number(number[i]);
  }
  answer = sum_num % 9;
  return answer;
}