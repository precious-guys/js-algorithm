let n = 10;
let isPrime = true;
let count = 0;

for (let i = 2; i <= n; i++) {
  for (let j = 2; j * j <= i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime === true) {
    count += 1;
  }

  isPrime = true;
}

console.log(count);
