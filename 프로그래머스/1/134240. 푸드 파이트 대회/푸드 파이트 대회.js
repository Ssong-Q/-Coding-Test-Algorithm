function solution(food) {
  let answer = "",
    result = [];

  for (let i = 1; i < food.length; i++) {
    const rep = Math.floor(food[i] / 2);
    for (let j = 0; j < rep; j++) {
      result.push(i);
    }
  }

  answer = result.join("") + "0" + result.reverse().join("");

  return answer;
}