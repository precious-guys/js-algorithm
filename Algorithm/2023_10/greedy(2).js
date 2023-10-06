const l = 10;
const n = [69, 42, 68, 76, 40, 87, 14, 65, 76, 81];
const m = 50;

function solution(l, n, m) {
  let answer = 0;
  n.sort((a, b) => b - a);

  for (let i = 0; i < m; i++) {
    n[0]--;
    n[l - 1]++;
    n.sort((a, b) => b - a);
  }
  answer = n[0] - n[l - 1];
  return answer;
}

console.log(solution(l, n, m));
