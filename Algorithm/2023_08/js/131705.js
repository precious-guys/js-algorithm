const number = [-2, 3, 0, 2, -5];

function solution(number) {
  let temp = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          temp++;
        }
      }
    }
  }
  return temp;
}

console.log(solution(number));
