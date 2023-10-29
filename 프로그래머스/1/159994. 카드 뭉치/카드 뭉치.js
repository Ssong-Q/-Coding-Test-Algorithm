function solution(cards1, cards2, goal) {
  let answer = "";
  const goalArr = goal.slice();
  let i = 0;
  while (i < goalArr.length) {
    if (cards1[0] === goal[0]) {
      cards1.shift();
      goal.shift();
    } else if (cards2[0] === goal[0]) {
      cards2.shift();
      goal.shift();
    }
    i++;
  }
  (cards1.length === 0 && goal.length === 0) ||
  (cards2.length === 0 && goal.length === 0) ||
  (cards1.length === 0 && cards2.length === 0 && goal.length === 0) ||
  goal.length === 0
    ? (answer = "Yes")
    : (answer = "No");
  return answer;
}