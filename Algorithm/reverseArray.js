function solution(n) {
  const stringN = n.toString();
  const reverseArray = [...stringN];
  const mapArray = reverseArray.map((i) => Number(i));
  return mapArray.reverse();
}
