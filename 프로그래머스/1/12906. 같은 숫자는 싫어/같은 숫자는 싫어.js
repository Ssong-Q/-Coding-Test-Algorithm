/**
 * 배열이 들어오면 중복된 숫자는 제거한 배열을 출력하는 함수
 * @param {number[]} arr
 * @returns 중복된 숫자들이 제거된 배열
 */

function solution(arr) {
  let answer = [];

  arr.forEach((_, i) => {
    if (answer[answer.length - 1] !== arr[i]) answer.push(arr[i]);
  });

  return answer;
}