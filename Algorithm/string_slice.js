function solution(s) {
  const str = s;
  const arry = [...str];

  if (arry.length % 2 == 0) {
    const i = arry.length / 2;
    return arry[i - 1] + arry[i];
  } else {
    let i = arry.length / 2;
    i = Math.floor(i);
    return arry[i];
  }
}
