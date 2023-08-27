const toppings = ["AB", "AC", "AD", "AE", "BC", "BD", "BE", "CD", "CE", "DE"];
const inputs = [1, 3, 9]; //AB AD CE
let answer = [];

for (let i = 0; i < inputs.length; i++) {
  answer.push(toppings[inputs[i] - 1]);
}
console.log(`${inputs} 번 토핑 선택...`, answer);

const delInput = [3, 9]; // AD, CE

for (let i = 0; i < delInput.length; i++) {
  answer = answer.filter((item) => item !== toppings[delInput[i] - 1]);
}
//answer = ["AB"]
console.log(`${delInput} 번 토핑 삭제...`, answer);

const addInput = [2, 3]; // AC, AD

for (let i = 0; i < addInput.length; i++) {
  answer.push(toppings[addInput[i] - 1]);
}
console.log(`${addInput}번 추가`, answer);
console.log("---------result---------");

for (let i = 0; i < answer.length; i++) {
  console.log(`${i}`, answer[i]);
}
