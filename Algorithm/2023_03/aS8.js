const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const input = [5, 10];
let answer = [];

answer = arr.slice(input[0] - 1, input[1]);
answer.reverse();
for (let i = input[0] - 1; i < input[1]; i++) {
  arr[i] = answer[i - (input[0] - 1)];
}

console.log(arr);
