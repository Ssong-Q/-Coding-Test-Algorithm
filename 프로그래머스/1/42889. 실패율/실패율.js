function solution(N, stages) {
  const answer = [];
  const arr = [];
  const sortedStages = stages.sort((a, b) => b - a);
  for (let i = 1; i < N + 1; i++) {
    const filteredStages = sortedStages.filter((item) => item === i);
    const number = filteredStages.length / stages.length;
    arr.push([number, i]);
    stages.splice(stages.length - filteredStages.length, filteredStages.length);
  }
  arr.sort((a, b) => b[0] - a[0]).forEach((item) => answer.push(item[1]));
  return answer;
}