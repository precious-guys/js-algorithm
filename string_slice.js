function solution(s) {
  let str = s;
  const arry = [...str]; //["a","b","c","d","e"]

  if (arry.length % 2 == 0) {
    let i = arry.length / 2;
    return arry[i - 1] + arry[i];
  } else {
    let i = arry.length / 2;
    i = Math.floor(i);
    return arry[i];
  }
}
