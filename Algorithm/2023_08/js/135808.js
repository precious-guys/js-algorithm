const k = 4;
const m = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

function solution(k, m, score) {
  let answer = 0;
  let length = Math.floor(score.length / m);
  let box = [];
  score.sort(); //오름차순 정렬을 통해서 맨 뒤 m만큼 자른 게 최상급 상자
  for (let i = 0; i < length; i++) {
    //길이 / m 만큼 실행
    box = score.slice(-m);
    score.splice(-m);
    answer += box[0] * m;
  }

  return answer;
}

console.log(solution(k, m, score));
