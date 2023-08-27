const array = [23, 87, 65, 12, 57, 32, 99, 81];
const input1 = 8;
const input2 = 32;

function BinarySearch(input1, input2, array) {
  const sortarr = array.sort((a, b) => a - b); //정렬
  let first = 0;
  let last = input1;

  while (first <= last) {
    const middle = Math.floor((first + last) / 2); //중간값 구하기

    if (sortarr[middle] === input2) {
      return middle + 1;
    } else if (sortarr[middle] > input2) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
}

console.log(BinarySearch(input1, input2, array));
