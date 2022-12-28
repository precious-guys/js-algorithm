function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < n; i++) {
    const num = (arr1[i] | arr2[i]).toString(2);
    let tuple = [];
    for (let j = num.length - n; j < num.length; j++) {
      if (num[j] === "1") {
        tuple.push("#");
      } else {
        tuple.push(" ");
      }
    }
    answer.push(tuple.join(""));
  }
  return answer;
}
