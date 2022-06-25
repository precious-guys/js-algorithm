//const s = "Zbcdefg"
function solution(s) {
  const toArray = [...s];
  toArray.sort();
  toArray.reverse();
  const answer = toArray.join("");
  return answer;
}
