const solution = (s) => {
  let arr = s.split("");
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
    if (temp[temp.length - 1] === temp[temp.length - 2]) {
      temp.pop();
      temp.pop();
    }
  }
  if (temp.length) return 0;
  else return 1;
};