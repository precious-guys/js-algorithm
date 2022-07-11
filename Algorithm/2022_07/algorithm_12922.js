function solution(n) {
  //n = 4;
  let answer = [];

  for (let i = 0; i < n; i++) {
    if (answer[i - 1] == "수") {
      answer.push("박");
    } else {
      answer.push("수");
    }
  }
  answer = answer.join("");
  return `${answer}`; //"수박수박";
}
