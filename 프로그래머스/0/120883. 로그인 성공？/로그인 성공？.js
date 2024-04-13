function solution(id_pw, db) {
  let answer = "fail";

  id_pw.forEach((_, idx) => {
    for (let i = 0; i < db.length; i++) {
      if (idx === 0 && id_pw[idx] === db[i][0]) {
        answer = "wrong pw";
        if (id_pw[1] === db[i][1]) answer = "login";
      }
    }
  });

  return answer;
}