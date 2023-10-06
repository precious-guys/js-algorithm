const people = [
  [172, 67],
  [183, 65],
  [180, 70],
  [170, 72],
  [181, 60],
];
const n = 5;

function solution(people, n) {
  people.sort((a, b) => b[0] - a[0]);
  let answer = 1;
  let large = people[0][1];
  console.log(people);

  for (let i = 1; i < n; i++) {
    if (people[i][1] > large) {
      large = people[i][1];
      answer++;
    }
  }
  return answer;
}

console.log(solution(people, n));
