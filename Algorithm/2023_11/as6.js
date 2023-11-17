const n = 5;
let arr = [90, 50, 70, 100, 60];
const m = 140;

function solution(n, arr, m) {
  let answer = 0;
  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[n] <= m) {
      arr.pop();
      arr.shift();
      answer++;
    } else {
      arr.shift();
      answer++;
    }
  }
  console.log(answer);
}

solution(n, arr, m);
