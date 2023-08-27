const n = 5; //5*5 크기
let arr = [
  //곶감 배열
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
const command = [
  [2, 0, 3],
  [5, 1, 2],
  [3, 1, 4],
];

function Persimmon(n, arr, command) {
  const cnt = 3;
  let answer = 0;
  let first = 0;
  let last = n;

  for (let i = 0; i < cnt; i++) {
    const [rotation, way, move] = command[i]; //비구조화 할당으로 rotation, way, move 추출

    if (way == 0) {
      //왼쪽일 때
      for (let j = 0; j < move; j++) {
        arr[rotation - 1] = arr[rotation - 1]
          .slice(1)
          .concat(arr[rotation - 1].slice(0, 1));
      }
      continue;
    }

    for (let j = 0; j < move; j++) {
      //오른쪽일 때
      arr[rotation - 1] = arr[rotation - 1]
        .slice(-1)
        .concat(arr[rotation - 1].slice(0, -1));
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = first; j < last; j++) {
      answer += arr[i][j];
    }
    if (i < Math.floor(n / 2)) {
      first++;
      last--;
      continue;
    }
    first--;
    last++;
  }

  return answer;
}

console.log(Persimmon(n, arr, command));
