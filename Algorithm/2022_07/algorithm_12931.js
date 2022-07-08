function solution(n) {
  //n = 123
  let str = n.toString();
  str = [...str];
  let answer = 0;
  for (let i = 0; i < str.length; i++) {
    answer += Number(str[i]);
  }

  return answer;
  //answer = 6
}
