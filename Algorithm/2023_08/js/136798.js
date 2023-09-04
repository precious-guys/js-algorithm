const number = 3;
const limit = 3;
const power = 2;
//5의 약수 개수는 3개
function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    //3번 반복
    let divisor = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      //제곱근으로 시간복잡도 최소화
      if (i % j === 0) {
        if (i / j === j) divisor += 1;
        else divisor += 2;
      }
      if (divisor > limit) {
        divisor = power;
        break;
      }
    }
    answer += divisor;
  }

  return answer;
}

console.log(solution(number, limit, power));

// // 최적의 약수의 개수 구하는 알고리즘
// let num = 5;
// let cnt = 2;
// if (num <= 1) {
//   cnt = 1;
// } else {
//   for (let i = cnt; i <= num / 2; i++) {
//     if (num % i === 0) cnt++;
//   }
// }

// console.log(cnt);
console.log(Math.sqrt(3));

for (let i = 1; i <= Math.sqrt(3); i++) {
  console.log("hi");
}
