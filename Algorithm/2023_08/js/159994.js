const cards1 = ["i", "drink", "water"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];

function solution(cards1, cards2, goal) {
  for (x of goal) {
    if (cards1[0] === x) {
      cards1.shift();
    } else if (cards2[0] === x) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}

console.log(solution(cards1, cards2, goal));
