const GCD = (a, b) => {
  //최대공약수
  let gcd = 1;

  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

const LCM = (a, b) => {
  //최소공배수
  let lcm = 1;

  while (true) {
    if (lcm % a == 0 && lcm % b == 0) {
      break;
    }
    lcm++;
  }
  return lcm;
};

const cntLCM = (num) => {
  let cnt = 2;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      cnt++;
    }
  }
  return cnt;
};
let num1 = 6;
let num2 = 12;
let answer = cntLCM(LCM(num1, num2)) * GCD(num1, num2);

console.log(answer);
