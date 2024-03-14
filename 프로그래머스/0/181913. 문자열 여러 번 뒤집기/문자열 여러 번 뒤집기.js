function solution(my_string, queries) {
  let answer = "";

  for (let i = 0; i < queries.length; i++) {
    my_string =
      my_string.substring(0, queries[i][0]) +
      my_string
        .substring(queries[i][0], queries[i][1] + 1)
        .split("")
        .reverse()
        .join("") +
      my_string.substring(queries[i][1] + 1, my_string.length);
  }
  answer = my_string;

  return answer;
}