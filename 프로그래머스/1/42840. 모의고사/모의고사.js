function solution(answers) {
  let result = [];
  let personOne = "12345".repeat(10000 / 5);
  let personTwo = "21232425".repeat(10000 / 8);
  let personThree = "3311224455".repeat(10000 / 10);

  personOne = personOne.split("").slice(0, answers.length);
  personTwo = personTwo.split("").slice(0, answers.length);
  personThree = personThree.split("").slice(0, answers.length);

  let countOne = 0;
  let countTwo = 0;
  let countThree = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === Number(personOne[i])) {
      countOne++;
    }
    if (answers[i] === Number(personTwo[i])) {
      countTwo++;
    }
    if (answers[i] === Number(personThree[i])) {
      countThree++;
    }
  }

  let arr = [
    [1, countOne],
    [2, countTwo],
    [3, countThree],
  ];
  let maximum = Math.max(countOne, countTwo, countThree);

  for (let i = 0; i < 3; i++) {
    if (maximum === arr[i][1]) {
      result.push(arr[i]);
    }
  }

  return result.map((i) => {
    return i[0];
  });
}