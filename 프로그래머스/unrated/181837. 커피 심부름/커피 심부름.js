function solution(order) {
  let answer = 0;
  for (const menu of order) {
    if (menu.includes('americano')) {
      answer += 4500;
    } else if (menu.includes('cafelatte')) {
      answer += 5000;
    } else {
      answer += 4500;
    }
  }
  return answer;
}