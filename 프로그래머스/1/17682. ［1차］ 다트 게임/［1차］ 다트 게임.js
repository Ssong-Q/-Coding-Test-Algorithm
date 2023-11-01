function solution(dartResult) {
  let answer;
  let toggle = true;
  let result = [];
  let temp = [];
  for (let num of dartResult) {
    if (!Number.isNaN(+num)) {
      if (num === "0" && !toggle) {
        temp.splice(0, 1, "10");
      } else {
        if (temp.length) {
          result.push(temp[0]);
          temp.pop();
        }
        temp.push(num);
      }
      toggle = false;
    }
    if (Number.isNaN(+num)) {
      toggle = true;
      switch (num) {
        case "S":
          temp.splice(0, 1, Math.pow(temp[0], 1));
          break;
        case "D":
          temp.splice(0, 1, Math.pow(temp[0], 2));
          break;
        case "T":
          temp.splice(0, 1, Math.pow(temp[0], 3));
          break;
        case "*":
          temp.splice(0, 1, temp[0] * 2);
          if (result.length) {
            result.splice(result.length - 1, 1, result[result.length - 1] * 2);
          }
          break;
        case "#":
          temp.splice(0, 1, temp[0] * -1);
          break;
        default:
          break;
      }
    }
  }
  result.push(temp[0]);
  temp.pop();
  answer = result.reduce((acc, v) => acc + v, 0);
  return answer;
}