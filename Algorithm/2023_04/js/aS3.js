const input = [2, 0, 3];

function solution(input) {
  let answer = [];
  let subArr = [];
  let arr = [
    [1, 2, 3, 4, 5],
    [2, 2, 3, 4, 5],
    [3, 2, 3, 4, 5],
    [4, 2, 3, 4, 5],
    [5, 2, 3, 4, 5],
  ];
  for (let i = 0; i < input[2]; i++) {
    let temp = 0;
    console.log(temp);
    temp = arr[input[0] - 1][0];
    arr[input[0]];
  }
  //   console.log(arr[input[0] - 1].splice(0, 0, "10"));
  //   console.log(arr)
}

solution(input);

let arr = [1, 2, 3, 4, 5];
arr.shift();

console.log(arr);
