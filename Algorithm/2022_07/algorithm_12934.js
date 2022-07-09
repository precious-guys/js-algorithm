function solution(n) {
  //n = 121
  let answer = Math.sqrt(n);
  answer = Math.pow(answer + 1, 2);
  if (Number.isInteger(answer) !== true) {
    return -1;
  } else {
    return answer; // = 144
  }
}
