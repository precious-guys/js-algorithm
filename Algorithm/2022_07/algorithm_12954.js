let x = 3;
let n = 4;

let array = [];
let xx = x;
for (let i = 0; i < n; i++) {
  array[i] = x;
  x = x + xx;
}
console.log(array);
