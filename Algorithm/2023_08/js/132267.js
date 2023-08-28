let a = 2;
let b = 1;
let n = 20;

function solution(a, b, n) {
  let bottle = 0;
  while (n >= a) {
    bottle += Math.floor(n / a) * b; //몫을 정수 변환 후 b와 곱하기
    n = Math.floor(n / a) * b + (n % a); //n에 n % a의 나머지를 더한다.
  }
  return bottle;
}
console.log(solution(a, b, n));
