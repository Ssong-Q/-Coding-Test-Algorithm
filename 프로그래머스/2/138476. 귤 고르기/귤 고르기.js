function solution(k, tangerine) {
  let answer = 0,
    obj = new Map();

  tangerine.sort((a, b) => a - b);

  for (let i = 0; i < tangerine.length; i++) {
    obj.set(
      tangerine[i],
      obj.has(tangerine[i]) ? obj.get(tangerine[i]) + 1 : 1
    );
  }

  let arr = [...obj];
  arr.sort((a, b) => b[1] - a[1]);

  let i = 0;
  while (k > 0) {
    k -= arr[i][1];
    i++;
    answer++;
  }

  return answer;
}