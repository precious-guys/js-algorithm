let ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

function solution(ingredient) {
  let stack = []; //스택 배열 생성
  let answer = 0;

  for (i of ingredient) {
    stack.push(i);
    if (stack.slice(-4).join("") === "1231") {
      //[2121231] 일때 1231이 있으므로 조건문 실행
      stack.splice(-4); //~1231 순서로 들어왔을 때 뒤에서 4자리를 제거
      answer++; //조건 성립시 햄버거 개수 증가
    }
  }

  return answer;
}

console.log(solution(ingredient));
