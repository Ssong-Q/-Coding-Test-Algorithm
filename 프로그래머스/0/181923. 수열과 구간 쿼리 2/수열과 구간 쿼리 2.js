function solution(arr, queries) {
  let answer = [];

  for (let i = 0; i < queries.length; i++) {
    const result = arr
      .slice(queries[i][0], queries[i][1] + 1)
      .filter((v) => v > queries[i][2]);

    answer.push(result.length ? Math.min(...result) : -1);
  }

  return answer;
}