function combineMaps(n, arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let code = "";
    for (let j = 0; j < n; j++) {
      code = code + (Number(arr1[i][j]) || Number(arr2[i][j]));
    }
    code = code.replaceAll("1", "#").replaceAll("0", " ");
    result.push(code);
  }
  return result;
}

function solution(n, arr1, arr2) {
  let arr1Code = [];
  let arr2Code = [];
  for (let i = 0; i < n; i++) {
    arr1Code.push(arr1[i].toString(2).padStart(n, "0"));
    arr2Code.push(arr2[i].toString(2).padStart(n, "0"));
  }

  return combineMaps(n, arr1Code, arr2Code);
}