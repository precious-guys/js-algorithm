const input = [12, 8];
let divisor1 = [];
let divisor2 = [];
const answer = [];

//약수 구하기
for (let i = 1; i <= input[0]; i++) {
  if (input[0] % i === 0) {
    divisor1.push(i);
  }
}

console.log("divisor1: ", divisor1);

for (let i = 1; i <= input[1]; i++) {
  if (input[1] % i === 0) {
    divisor2.push(i);
  }
}
console.log("divisor2: ", divisor2);

for (let i = 0; i < divisor1.length; i++) {
  for (let j = 0; j < divisor2.length; j++) {
    if (divisor1[i] == divisor2[j]) {
      answer.push(divisor1[i]);
    }
  }
}
console.log("공약수 : ", answer); //[1,2,4]

const res = [];

const dfs = (start = 0, arr = []) => {
  res.push(arr);

  //if (arr.length === answer) return;

  for (let i = start; i < answer.length; i++) {
    dfs(i + 1, [...arr, answer[i]]);
  }
  console.log("start1: ", start, "arr1 : ", arr);
};
dfs();

console.log(res);
