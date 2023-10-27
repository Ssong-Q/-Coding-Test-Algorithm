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

  let Arr1 = [1, countOne];
  let Arr2 = [2, countTwo];
  let Arr3 = [3, countThree];

  result.push(Arr1);

  if (Arr2[1] > Arr1[1]) {
    result.pop();
    result.push(Arr2);
  } else if (Arr2[1] === Arr1[1]) {
    result.push(Arr2);
  }

  if (result.length === 1) {
    if (Arr3[1] > result[0][1]) {
      result.pop();
      result.push(Arr3);
    } else if (Arr3[1] === result[0][1]) {
      result.push(Arr3);
    }
  } else {
    if (Arr3[1] > result[0][1] && Arr3[1] > result[1][1]) {
      result.pop();
      result.pop();
      result.push(Arr3);
    } else if (Arr3[1] === result[0][1]) {
      result.push(Arr3);
    }
  }

  return result.map((i) => {
    return i[0];
  });
}