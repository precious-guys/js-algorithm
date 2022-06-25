// function solution(absolutes, signs) {
absolutes = [4, 7, 12];
signs = [true, false, true];
let result = 0;
for (let i = 0; i < absolutes.length; i++) {
  if (signs[i] === true) {
    result = result + absolutes[i];
  } else {
    result = result - absolutes[i];
  }
}

console.log(result);
