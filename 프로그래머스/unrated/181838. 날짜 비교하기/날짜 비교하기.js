function solution(date1, date2) {
  const DATE_ONE = new Date(date1[0], date1[1], date1[2]);
  const DATE_TWO = new Date(date2[0], date2[1], date2[2]);

  if (DATE_ONE - DATE_TWO < 0) {
    return 1;
  } else {
    return 0;
  }
}
