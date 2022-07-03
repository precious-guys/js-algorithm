//arr = [5, 9, 7, 10]
//divisor = 5;
function solution(arr, divisor) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) {
      answer.push(arr[i]);
    }
  }
  if (answer == 0) {
    answer[0] = -1;
  }

  answer.sort((a, b) => {
    return a - b;
  });

  return answer;
}
//answer = [5, 10]
