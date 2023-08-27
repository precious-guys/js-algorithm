const input = [45, 73, 66, 87, 92, 67, 75, 79, 75, 80];
const input1 = 10;
let temp = 0;
let temp2 = 0;
let min = 0;
let max = 0;
const answer = [];
const abs = [];
const minarr = [];

for (let i = 0; i < input.length; i++) {
  temp = temp + input[i];
}
temp = temp / input1;
temp = Math.round(temp);

for (let j = 0; j < input.length; j++) {
  abs.push(Math.abs(temp - input[j]));
}

min = Math.min.apply(null, abs);

for (let k = 0; k < abs.length; k++) {
  if (abs[k] === min) {
    minarr.push(k);
  }
}

for (let n = 0; n < minarr.length; n++) {
  answer.push(input[minarr[n]]);
}

max = Math.max.apply(null, answer);

for (let l = 0; l < input.length; l++) {
  if (input[l] == max) {
    console.log(input[l], l + 1);
    break;
  }
}
