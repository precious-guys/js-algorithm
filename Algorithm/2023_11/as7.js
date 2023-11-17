const input = "A*(B+C)";

function solution(input) {
  let stack = [];
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    const str = input[i];
    if (str === "(") {
      // "("는 push만
      stack.push(str);
    } else if (str === ")") {
      //")"를 만났을 때는 stack에서 "("을 만날 때 까지 연산자를 pop 시킴.
      while (stack.length && stack[stack.length - 1] !== "(") {
        answer += stack.pop();
      }
      stack.pop();
    } else if (str === "*" || str === "/") {
      while (
        (stack.length && stack[stack.length - 1] === "/") ||
        stack[stack.length - 1] === "*"
      ) {
        answer += stack.pop();
      }
      stack.push(str);
    } else if (str === "+" || str === "-") {
      //"("를 만날 때까지 pop을 시킴.
      while (stack.length && stack[stack.length - 1] !== "(") {
        answer += stack.pop();
      }
      stack.push(str);
    } else {
      //피연산자들을 출력
      answer += str;
    }
  }
  while (stack.length) {
    //마지막으로 스택에 남은 연산자들을 모두 출력
    answer += stack.pop();
  }
  return answer;
}

console.log(solution(input));
