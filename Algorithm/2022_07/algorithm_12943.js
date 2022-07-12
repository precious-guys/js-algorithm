let num = 6;
let answer = 6;
let time = 0;
for (time = 0; answer !== 1; time++) {
  if (answer % 2 == 0) {
    answer = answer / 2;
    console.log(answer);
  } else if (answer % 2 == 1) {
    answer = answer * 3 + 1;
    console.log(answer);
  }
}
console.log(time);
