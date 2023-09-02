const k = 3;
const score = [10, 100, 20, 150, 1, 100, 200];

function solution(k, score) {
  let result = [];
  let answer = [];

  for (num of score) {
    result.push(num);
    result.sort((a, b) => {
      return b - a;
    });
    if (result.length > k) {
      result.pop();
    }
    answer.push(Number(result.slice(-1)));
  }

  return answer;
}

console.log(solution(k, score));
