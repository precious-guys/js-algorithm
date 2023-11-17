const n = "CBA";
const str = "CBDAGE";

function solution(n, str) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < n.length; j++) {
      if (str[i] === n[j]) {
        //필수 과목인지
        if (cnt >= j) {
          console.log(cnt, j);
          // 필수과목 중 들을 수 있는 과목인지
          if (cnt == j) {
            // 현재 들을 수 있는 과목인지
            cnt++;
          }
        } else {
          return "NO";
        }
      }
    }
  }
  return "YES";
}

console.log(solution(n, str));
