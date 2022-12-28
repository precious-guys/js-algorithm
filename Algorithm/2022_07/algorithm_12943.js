function solution(num) {
  let answer = 0;
  for (answer = 0; num !== 1; answer++) {
    if (answer == 500) {
      answer = -1;
      break;
    } else if (num % 2 == 0) {
      num = num / 2;
    } else if (num % 2 == 1) {
      num = num * 3 + 1;
    } else if (num == 1) {
      answer = 0;
    }
  }
  return answer;
}
