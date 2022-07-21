function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else if (n >= 2) {
    return fibonacci(n - 1) + fibonacci(n - 2); //재귀함수
  }
}

console.log(fibonacci(15)); //610
