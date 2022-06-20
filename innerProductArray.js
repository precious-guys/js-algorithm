function solution(a, b) {
  let temp = 0;
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    temp = a[i] * b[i];
    answer = answer + temp;
  }
  return answer;
}
