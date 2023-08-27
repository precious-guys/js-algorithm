// console.log(solution([3, 0, 6, 1, 5]));
// function solution(citations) {
//   let answer = 0;
//   citations.sort((a, b) => {
//     return b - a;
//   });
//   for (let i = 0; i < citations.length; i++) {
//     if (citations[i] > answer) {
//       answer++;
//     }
//   }

//   return answer;
// }

console.log(solution([3, 0, 6, 1, 5]));
function solution(citations) {
  let answer = 0;
  citations
    .sort((a, b) => {
      return b - a;
    })
    .map((item) => {
      if (item > answer) {
        answer++;
      }
    });

  return answer;
}
