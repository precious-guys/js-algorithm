const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];

function solution(name, yearning, photo) {
  let obj = {};
  let answer = [];
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }
  console.log(obj);

  for (let i = 0; i < photo.length; i++) {
    let temp = 0;
    for (let j = 0; j < photo[i].length; j++) {
      obj[photo[i][j]] ? (temp += obj[photo[i][j]]) : (temp += 0);
    }
    answer[i] = temp;
  }
  console.log(answer);
}

solution(name, yearning, photo);
