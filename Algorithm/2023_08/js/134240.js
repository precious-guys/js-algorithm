const food = [1, 3, 4, 6];

// function solution(food) {
//   let answer = "";

//   for (let i = 1; i < food.length; i++) {
//     answer += String(i).repeat(Math.floor(food[i] / 2)); //i를 문자열로 변환후 repeat하여 문자열에 추가
//   }
//   answer = answer + 0 + [...answer].reverse().join("");//배열의 불변성을 유지한채 reaver한 string

//   return answer;
// }

//배열로 푸는 법도 있지만 문자열로 쉽게 할 수 있다.

function solution(food) {
  //answer이라는 변수를 빈 문자열로 정의한다.
  let answer = "";
  for (let i = 1; i < food.length; i++) {
    //food의 0번째는 물의 수 이므로 인덱스를 1부터 시작
    answer += String(i).repeat(Math.floor(food[i] / 2));
  }

  answer = answer + 0 + [...answer].reverse().join("");
  return answer;
}
console.log(solution(food));
