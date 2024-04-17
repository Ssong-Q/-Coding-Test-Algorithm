function solution(rank, attendance) {
  let answer = 0,
    result = [];

  let i = 1;
  while (result.length < 3) {
    const IDX = rank.findIndex((el) => el === i);
    if (attendance[IDX]) result.push(IDX);

    i++;
  }

  answer = result[0] * 10000 + result[1] * 100 + result[2];

  return answer;
}