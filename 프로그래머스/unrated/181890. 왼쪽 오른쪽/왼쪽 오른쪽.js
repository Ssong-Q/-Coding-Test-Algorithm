function solution(str_list) {
  let answer = [];
  for(let i = 0; i < str_list.length; i++) {
    console.log(i);
    if (str_list[i] === 'l' || str_list[i] === 'r') {
      if (str_list[i] === 'l') {
        answer = str_list.slice(0, i);
        return answer;
      } else {
        answer = str_list.slice(i + 1);
        return answer;
      }
    }
  }
  return answer;
}