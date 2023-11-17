const n = 5;
const m = 140;
const array = [100, 90, 70, 60, 50];

function solution(n, m, array) {
  let sorted = array.sort((a, b) => b - a);
  let answer = 0;
  for (let i = 0; i < n; i++) {
    let large = sorted[0];
    let last = sorted[sorted.length - 1];
    if (large + last <= m) {
      answer++;
      sorted.pop();
      sorted.shift();
    } else {
      answer++;
      sorted.shift();
    }
    if (sorted.length == 0) break;
  }

  return answer;
}

console.log(solution(n, m, array));
