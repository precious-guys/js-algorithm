//const arr = [4, 3, 2, 6];
function solution(arr) {
  const wrong = [-1];
  if (arr[0] == 10) {
    return wrong;
  } else if (arr.length == 0) {
    return wrong;
  } else if (arr[0] !== 10) {
    return arr.filter((item) => item !== Math.min(...arr)); //[4, 3, 6];
  }
}
