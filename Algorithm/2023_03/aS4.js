let numArr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

let input = 3;
let answer = [];
let temp = 0;

numArr = numArr.sort(function (a, b) {
  return b - a;
});

console.log(numArr);
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    temp = temp + numArr[j];
    console.log(temp);
  }
  answer.push(temp);
  break;
}
