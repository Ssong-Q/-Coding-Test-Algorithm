function solution(rank, attendance) {
  let answer = 0;
  let abc_array = [];
  let rank_copy = JSON.parse(JSON.stringify(rank));
  for (let i = attendance.length - 1; i >= 0; i--) {
    if (attendance[i] === false) {
      rank.splice(i, 1);
    }
  }
  for (let i = 0; i < 3; i++) {
    abc_array.push(Math.min(...rank));
    const index = rank.indexOf(Math.min(...rank));
    rank.splice(index, 1);
  }
  answer = 10000 * rank_copy.indexOf(abc_array[0]) + 100 * rank_copy.indexOf(abc_array[1]) + rank_copy.indexOf(abc_array[2]);
  return answer;
}
