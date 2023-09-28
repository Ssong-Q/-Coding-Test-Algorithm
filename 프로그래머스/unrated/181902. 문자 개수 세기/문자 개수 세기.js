function solution(my_string) {
  let answer = [];
  for (let i = 65; i <= 90; i++) {
    let count = 0;
    for(let j = 0; j < my_string.length; j++) {
      if (my_string.charCodeAt(j) === i) count++;
    }
    answer.push(count);
  }
  for (let i = 97; i <= 122; i++) {
    let count = 0;
    for(let j = 0; j < my_string.length; j++) {
      if (my_string.charCodeAt(j) === i) count++;
    }
    answer.push(count);
  }
  return answer;
}