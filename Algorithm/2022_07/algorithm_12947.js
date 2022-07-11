function solution(x) {
  //x = 12
  let answer = String(x);
  answer = [...answer];
  let n = 0;
  for (let i = 0; i < answer.length; i++) {
    answer[i] = Number(answer[i]);
    n = n + answer[i];
  }
  if (x % n == 0) {
    //12 % 3 == 0
    return true;
  } else {
    return false;
  }
}
