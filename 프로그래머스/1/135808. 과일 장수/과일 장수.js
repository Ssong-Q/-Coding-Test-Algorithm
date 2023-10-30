function solution(k, m, score) {
  let answer = 0;
  const sortedScore = score.sort((a, b) => b - a);
  for (let i = 0; i < sortedScore.length; i = i + m) {
    if (i + m >= sortedScore.length) {
      if (sortedScore.slice(i).length < m) break;
      answer += Math.min(...sortedScore.slice(i)) * m;
      break;
    } else {
      answer += Math.min(...sortedScore.slice(i, i + m)) * m;
    }
  }
  return answer;
}