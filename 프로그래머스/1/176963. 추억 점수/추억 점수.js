function solution(name, yearning, photo) {
  let result = [];
  let memoryScore = new Object();
  for (let i = 0; i < name.length; i++) {
    memoryScore[name[i]] = yearning[i];
  }

  for (let i = 0; i < photo.length; i++) {
    let total = 0;
    for (const name of photo[i]) {
      if (Object.keys(memoryScore).includes(name)) {
        total += memoryScore[name];
      }
    }
    result.push(total);
  }
  return result;
}