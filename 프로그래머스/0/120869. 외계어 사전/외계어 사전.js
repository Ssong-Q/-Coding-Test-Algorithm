function solution(spell, dic) {
  let answer = 2,
    arr = Array.from({ length: dic.length }, () => 0);
  const len = spell.length;

  for (let s of spell) {
    for (let i = 0; i < dic.length; i++) {
      if (dic[i].includes(s)) arr[i]++;
    }
  }

  for (let x of arr) {
    if (x === len) answer = 1;
  }

  return answer;
}