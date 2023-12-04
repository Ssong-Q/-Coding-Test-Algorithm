function solution(progresses, speeds) {
  let answer = [];
  let stack = [];
  let count = 0;
  let stackDay = 0;
  for (let i = 0; i < progresses.length; i++) {
    const day = Math.ceil((100 - progresses[i]) / speeds[i]);
    const nextDay = Math.ceil((100 - progresses[i + 1]) / speeds[i + 1]);
    if (!stack.length) {
      stack.push(progresses[i]);
      stackDay = day;
      count = 1;
      if (nextDay > stackDay && i !== progresses.length - 1) {
        answer.push(count);
        stack.pop();
        count = 0;
      } else if (i === progresses.length - 1) {
        answer.push(count);
      }
    } else {
      count += 1;
      if (nextDay > stackDay && i !== progresses.length - 1) {
        answer.push(count);
        stack.pop();
        count = 0;
      } else if (i === progresses.length - 1) {
        answer.push(count);
      }
    }
  }
  return answer;
}