function solution(food) {
  let foodOrder = [];
  food.shift();
  food
    .map((item) => {
      return Math.floor(item / 2);
    })
    .forEach((item, index) => {
      foodOrder.push((index + 1).toString().repeat(item));
    });
  return foodOrder.join("") + "0" + foodOrder.reverse().join("");
}