function fibonacci(number) {
  for (let i = 2; i <= number; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  console.log(result);
}
fibonacci(15);
//bottomUp
