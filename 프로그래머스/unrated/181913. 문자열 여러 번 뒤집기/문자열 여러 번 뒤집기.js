function solution(my_string, queries) {
  var answer = '';
  let my_string_array = my_string.split('');
  let i = 0;
  while (i < queries.length) {
    const changed_phrase = my_string_array.slice(queries[i][0], queries[i][1] + 1).reverse();
    my_string_array.splice(queries[i][0], queries[i][1] - queries[i][0] + 1, ...changed_phrase);
    i++;
  }
  answer = my_string_array.join("");
  return answer;
}
