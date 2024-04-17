function solution(people, limit) {
  let answer = 0;

  people.sort((a, b) => a - b);

  let start = 0;
  let end = people.length - 1;

  while (start <= end) {
    if (people[end] + people[start] <= limit) start += 1;
    end -= 1;
    answer++;
  }

  return answer;
}