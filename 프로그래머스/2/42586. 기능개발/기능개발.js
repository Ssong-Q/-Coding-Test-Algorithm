function solution(progresses, speeds) {
  let answer = [],
    temp = 1,
    tempArr = [];

  const leftDays = progresses.map((el, idx) => {
    return Math.ceil((100 - el) / speeds[idx]);
  });

  tempArr.push(leftDays[0]);
  for (let i = 1; i < leftDays.length; i++) {
    if (tempArr[tempArr.length - 1] < leftDays[i]) {
      tempArr.push(leftDays[i]);
      answer.push(temp);
      temp = 1;
    } else {
      temp++;
    }
  }
  answer.push(temp);

  return answer;
}