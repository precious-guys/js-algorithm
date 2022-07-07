function solution(n) {
  const str = n.toString();
  let answer = 0;
  const array = [...str];
  array.sort((a, b) => {
    return b - a;
  });
  answer = array.join("");
  return Number(answer);
}
