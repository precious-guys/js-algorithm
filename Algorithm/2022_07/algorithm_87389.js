function solution(n) {
  //n = 10
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      return i; //3
    }
  }
}
