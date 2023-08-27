const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];
function solution(players, callings) {
  let obj = {};
  for (let i = 0; i < players.length; i++) {
    obj[players[i]] = i;
  }
  for (let i = 0; i < callings.length; i++) {
    let idx = obj[callings[i]]; //현재 요소 idx값
    let temp = players[idx - 1]; //앞 사람

    //순서 바꾸기
    players[idx - 1] = players[idx];
    players[idx] = temp;

    obj[callings[i]]--;
    obj[temp]++;
  }
  return players;
}

console.log(solution(players, callings));
