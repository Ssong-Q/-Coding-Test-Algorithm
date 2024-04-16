function solution(score) {
  let answer = [],
    avg = [];
  avg = score.map((val) => {
    return (val[0] + val[1]) / 2;
  });

  for (let i = 0; i < avg.length; i++) {
    let temp = 1;
    for (let j = 0; j < avg.length; j++) {
      if (j === i) continue;

      if (avg[i] < avg[j]) temp++;
    }
    answer.push(temp);
  }

  return answer;
}